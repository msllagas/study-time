import { View} from 'react-native'
import { Modal,Portal, Text, Button, PaperProvider } from 'react-native-paper';
import React from 'react'

const MyModal = ({onDismiss}) => {
  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </PaperProvider>
  )
}

export default MyModal