import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { colors } from "../../../../utils/colors";
import AddButton from "../../../../components/AddButton";
import { AntDesign } from "@expo/vector-icons";

const SQ3R = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [topicName, setTopicName] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddButton onPressAdd={toggleModal} />
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <AntDesign name="close" size={35} color="gray" />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "AmaticBold",
                fontSize: 40,
                textAlign: "center",
                color: colors.pink,
                marginTop: 60,
              }}
            >
              Topic Name
            </Text>

            <TextInput
              label="Topic"
              value={topicName}
              onChangeText={(topicName) => setTopicName(topicName)}
              style={[
                styles.input,
                isInputActive ? styles.activeInput : styles.inactiveInput,
              ]}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.white,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContainer: {
    backgroundColor: colors.white,
    height: 300,
    width: 280,
    borderRadius: 10,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    marginTop: 10,
  },
  input: {
    width: "85%",
    height: "18%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: colors.ligtherPink,
    borderBottomColor: colors.pink,
    borderBottomWidth: 1,
  },
  inactiveInput: {
    color: colors.gray,
  },
  activeInput: {
    color: colors.pink,
  },

  saveButton: {
    marginTop: 45,
    backgroundColor: colors.pink,
    width: "45%",
    height: 50,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },

  saveButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
  },
});

export default SQ3R;
