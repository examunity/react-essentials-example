import React from "react";
import { View, StyleSheet, css } from "react-essentials";

const styles = StyleSheet.create({
  stack: css`
    position: fixed;
    bottom: 0;
    right: 1rem;
    max-width: 240px;
    z-index: 1040;
  `,
});

function ToastsStack({ children }) {
  return (
    <View style={styles.stack} data-fixed="true">
      {children.reverse()}
    </View>
  );
}

export default ToastsStack;
