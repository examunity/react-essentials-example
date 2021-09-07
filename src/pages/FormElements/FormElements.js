import React from "react";
import { Paragraph, Text, Card, Form } from "react-essentials";
import validateSchema from "../../utils/validateSchema";

function FormElements() {
  const options = [
    { value: "001", label: "Bulbasaur" },
    { value: "004", label: "Charmander" },
    { value: "007", label: "Squirtle" },
  ];

  return (
    <>
      <Card styleName="mb-3">
        <Card.Header>
          <Text>Form components</Text>
        </Card.Header>
        <Card.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </Paragraph>
          <Form
            initialValues={{
              input: "Patrik",
              passwordInput: null,
              multilineInput: null,
              picker: null,
              choice: null,
              multipleChoice: [],
              checkbox: false,
              datePicker: null, // new Date('1/20/2017'),
            }}
            validate={validateSchema({
              input: "required",
              passwordInput: "required",
              multilineInput: "required",
              picker: "required",
              choice: "required",
              datePicker: "required",
            })}
            onSubmit={(values, { setSubmitting }) => {
              // eslint-disable-next-line no-console
              console.log(values);

              setSubmitting(false);
            }}
          >
            <Form.Input
              name="input"
              title="Test <Form.Input />"
              placeholder="Type..."
              info="This is an info text to describe the form element"
            />
            <Form.Input
              type="password"
              name="passwordInput"
              title="Test <Form.Input /> (type -> password)"
            />
            <Form.Input
              name="multilineInput"
              title="Test <Form.Input /> (multiline)"
              multiline
            />
            <Form.Picker
              name="picker"
              title="Test <Form.Picker />"
              placeholder="Pick an option..."
              options={options}
            />
            <Form.Choice
              title="Test <Form.Choice />"
              name="choice"
              options={options}
            />
            <Form.Choice
              name="multipleChoice"
              title="Test <Form.Choice /> (multiple)"
              options={options}
              multiple
            />
            <Form.Checkbox
              name="checkbox"
              title="Test <Form.Checkbox />"
              label="I agree with aaaaall da rules"
              disabled
            />
            <Form.DatePicker
              name="datePicker"
              title="Test2 <Form.DatePicker />"
              placeholder="Pick a date..."
            />
            <Form.Button type="submit" styleName="mb-3">
              <Text>Submit & show errors</Text>
            </Form.Button>
            <Form.Button type="reset">
              <Text>Reset</Text>
            </Form.Button>
          </Form>
        </Card.Body>
      </Card>
      <Card styleName="mb-3">
        <Card.Header>
          <Text>Small/Large form components</Text>
        </Card.Header>
        <Card.Body>
          <Form
            initialValues={{
              smallInput: null,
              largeInput: null,
            }}
            validate={validateSchema({
              smallInput: "required",
              largeInput: "required",
            })}
            onSubmit={(values, { setSubmitting }) => {
              // eslint-disable-next-line no-console
              console.log(values);

              setSubmitting(false);
            }}
          >
            <Form.Input
              name="smallInput"
              title="Test small <Form.Input />"
              placeholder="Type..."
              size="sm"
            />
            <Form.Input
              name="largeInput"
              title="Test large <Form.Input />"
              placeholder="Type..."
              size="lg"
            />
            <Form.Button type="submit" size="sm">
              <Text>Submit & show errors</Text>
            </Form.Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default FormElements;
