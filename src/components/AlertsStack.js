import React from "react";
import { View, StyleSheet, css } from "react-essentials";

const styles = StyleSheet.create({
  stack: css`
    position: fixed;
    right: 0;
    left: 0;
    max-width: 496px;
    margin-horizontal: auto;
    z-index: 1040;
  `,
});

function AlertsStack({ children }) {
  return (
    <View style={styles.stack} data-fixed="true">
      {children.reverse()}
    </View>
  );
}

export default AlertsStack;
