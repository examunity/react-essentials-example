import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-essentials";

function ControlledModal() {
  const [modal, setModal] = useState(false);

  return (
    <View styleName="flex-row mb-3">
      <Button
        onPress={() => {
          setModal(true);
        }}
      >
        <Text>Modal</Text>
      </Button>
      <Modal
        visible={modal}
        onToggle={(value) => {
          setModal(value);
        }}
      >
        <Modal.Header styleName="flex-row">
          <Modal.Title>
            <Text>Modal Header</Text>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Text>
        </Modal.Body>
        <Modal.Footer styleName="flex-row jc-end">
          <Button color="secondary" dismiss={Modal} styleName="mr-3">
            <Text>Close</Text>
          </Button>
          <Button dismiss={Modal}>
            <Text>Save changes</Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </View>
  );
}

export default ControlledModal;
