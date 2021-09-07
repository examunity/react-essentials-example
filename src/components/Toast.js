import React from "react";
import { Toast as BaseToast, BlockLink, Text, View } from "react-essentials";

const defaultProps = {
  title: null,
  link: null,
  dismissible: true,
};

function Toast({ dismiss, pauseTimeout, resumeTimeout, title, content, link }) {
  const inner = (
    <>
      {title && (
        <BaseToast.Header>
          <Text>{title}</Text>
        </BaseToast.Header>
      )}
      <BaseToast.Body>
        <Text>{content}</Text>
      </BaseToast.Body>
    </>
  );

  return (
    <BaseToast onMouseEnter={pauseTimeout} onMouseLeave={resumeTimeout}>
      {link && (
        <BlockLink
          to={link}
          onPress={() => {
            dismiss();
          }}
        >
          {inner}
        </BlockLink>
      )}
      {!link && <View>{inner}</View>}
    </BaseToast>
  );
}

Toast.defaultProps = defaultProps;

export default Toast;
