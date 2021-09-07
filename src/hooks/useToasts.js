import React from "react";
import { useStack } from "react-stacks";
import Toast from "../components/Toast";

export default function useToasts() {
  const stack = useStack("toasts");

  return {
    add: ({ autoDismiss, ...toastProps }) => {
      function ToastWrapper(props) {
        return <Toast {...toastProps} {...props} />;
      }

      stack.push(ToastWrapper, { autoDismiss });
    },
  };
}
