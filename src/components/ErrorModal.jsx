import * as React from "react";
import { Modal, Portal, Text } from "react-native-paper";

const ErrorModal = ({ visible, hideModal }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Text>Please input or correct the values</Text>
      </Modal>
    </Portal>
  );
};

export default ErrorModal;
