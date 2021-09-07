import React from "react";
import { useStack } from "react-stacks";
import Alert from "../components/Alert";

export default function useAlerts() {
  const stack = useStack("alerts");

  return {
    add({ autoDismiss, ...alertProps }) {
      function AlertWrapper(props) {
        return <Alert {...alertProps} {...props} />;
      }

      stack.push(AlertWrapper, { autoDismiss });
    },
  };
}
