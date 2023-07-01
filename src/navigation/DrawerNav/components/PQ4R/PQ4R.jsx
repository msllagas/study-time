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
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../../TopTabNav/TopBar";
import Done from "../../../../components/Done";
import Ongoing from "../../../../components/Ongoing";

const PQ4R = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [topicName, setTopicName] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const togglePreview = () => {
    // Perform any save logic here

    // Close the modal
    setModalVisible(false);

    // Navigate to "PQ4RSurvey" screen
    navigation.navigate("PQ4RPreview");
  };

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar Done={Done} Ongoing={Ongoing} tag="pomodoro" />
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
                color: colors.skyBlue,
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

            <TouchableOpacity
              style={styles.saveButton}
              onPress={togglePreview}
              // Save button pressed
              // Perform any save logic here

              // Navigate to "PQ4RSurvey" screen
              //navigation.navigate("PQ4RSurvey")
            >
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
    backgroundColor: colors.lighterBlue,
    borderBottomColor: colors.lightBlue,

    borderBottomWidth: 1,
  },
  inactiveInput: {
    color: colors.gray,
  },
  activeInput: {
    color: colors.skyBlue,
  },

  saveButton: {
    marginTop: 45,
    backgroundColor: colors.skyBlue,
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

export default PQ4R;
