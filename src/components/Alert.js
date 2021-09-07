import React from "react";
import {
  Alert as BaseAlert,
  Text,
  View,
  Heading,
  StyleSheet,
  css,
} from "react-essentials";

const styles = StyleSheet.create({
  alert: css`
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
    align-items: center;
    flex-direction: row;
  `,
  container: css`
    flex-grow: 1;
    flex-shrink: 1;
  `,
});

const defaultProps = {
  title: null,
  dismissible: true,
};

function Alert({ pauseTimeout, resumeTimeout, title, content, color }) {
  return (
    <BaseAlert
      color={color}
      style={styles.alert}
      onMouseEnter={pauseTimeout}
      onMouseLeave={resumeTimeout}
    >
      <View style={styles.container}>
        {title && <Heading size={5}>{title}</Heading>}
        <Text>{content}</Text>
      </View>
    </BaseAlert>
  );
}

Alert.defaultProps = defaultProps;

export default Alert;
