// @flow
const RULES = {
  confirmed: [],
  email: [],
  username: [],
  max: ["max"],
  min: ["min"],
  numeric: [],
  amount: ["amount"],
  required: [],
};

const parseSchema = (rawSchema) => {
  const schema = {};

  Object.keys(rawSchema).forEach((key) => {
    const rules = {};

    rawSchema[key].split("|").forEach((rule) => {
      const [name, parametersAsString] = rule.split(":");

      if (!RULES[name]) {
        // eslint-disable-next-line no-console
        console.error(`Validation rule ${name} does not exist.`);

        return;
      }

      const parameters = parametersAsString
        ? parametersAsString.split(",")
        : [];

      if (parameters.length !== RULES[name].length) {
        // eslint-disable-next-line no-console
        console.error(
          `Validation rule ${rule} expects ${RULES[name].length} arguments, ${parameters.length} given.`
        );

        return;
      }

      rules[name] = parameters;
    });

    schema[key] = rules;
  });

  return schema;
};

const Validator = {
  confirmed(value, parameters, key, values) {
    return value === values[`${key}_confirmation`];
  },
  email(value) {
    return !value || value.search(/^\S+@\S+\.\S+$/) !== -1;
  },
  numeric(value) {
    return !value || value.search(/^[0-9]+$/) !== -1;
  },
  amount(value, parameters) {
    if (!value) {
      return true;
    }

    if (parameters[0] === "de") {
      return (
        value.search(
          /^(([0-9]{1,3}\.([0-9]{3}\.)*)[0-9]{3}|[0-9]{1,3})(,[0-9]{1,2})?$/
        ) !== -1 || value.search(/^[0-9]+(,([0-9]{1,2})?)?$/) !== -1
      );
    }

    return (
      value.search(
        /^(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{1,2})?$/
      ) !== -1 || value.search(/^[0-9]+(\.([0-9]{1,2})?)?$/) !== -1
    );
  },
  username(value) {
    return !value || value.search(/^[a-zA-Z0-9_.]+$/) !== -1;
  },
  max(value, parameters) {
    return !value || value.length <= parameters[0];
  },
  min(value, parameters) {
    return !value || value.length >= parameters[0];
  },
  required(value) {
    return (Array.isArray(value) && value.length > 0) || !!value;
  },
};

const validateRule = (rule, key, values, schema) => {
  if (!schema[key][rule]) {
    return true;
  }

  const validate = Validator[rule];

  return validate(values[key], schema[key][rule], key, values);
};

const getNamedParameters = (rule, parameters) => {
  const namedParameters = {};

  parameters.forEach((parameter, key) => {
    namedParameters[RULES[rule][key]] = parameter;
  });

  return namedParameters;
};

export default function validateSchema(rawSchema) {
  if (!rawSchema) return null;

  const schema = parseSchema(rawSchema);

  return (values) => {
    const errors = {};
    const promises = [];

    Object.keys(values).forEach((key) => {
      if (!schema[key]) {
        return;
      }

      Object.keys(schema[key]).forEach((rule) => {
        const validation = validateRule(rule, key, values, schema);
        if (validation === false) {
          errors[key] = {
            rule,
            parameters: getNamedParameters(rule, schema[key][rule]),
          };
        }

        if (typeof validation !== "boolean") {
          promises.push(validation);

          validation.then((response) => {
            if (response.valid === false) {
              errors[key] = {
                rule,
                parameters: getNamedParameters(rule, schema[key][rule]),
              };
            }
          });
        }
      });
    });

    return Promise.all(promises).then(() => {
      return errors;
    });
  };
}
