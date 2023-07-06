import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
  StyleSheet,
  TextInput,
  CheckBox,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import SQ3RNav from "./SQ3RNav";
import { colors } from "../../../../utils/colors";
import DeleteButton from "../../../../components/DeleteButton";
import { useAppContext } from "../../../../context/AppContext";

const SQ3RQuestion = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState("");
  const { savedQuestions, setSavedQuestions } = useAppContext();
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const activeComponent = "question";

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleQuestionChange = (text) => {
    setQuestion(text);
  };

  const saveQuestion = () => {
    setSavedQuestions([...savedQuestions, question]);
    closeModal();
    setQuestion("");
  };

  const deleteQuestions = () => {
    const filteredQuestions = savedQuestions.filter(
      (_, index) => !selectedQuestions.includes(index)
    );
    setSavedQuestions(filteredQuestions);
    setSelectedQuestions([]);
    setIsDeleteMode(false);
  };

  const toggleQuestionSelection = (index) => {
    if (selectedQuestions.includes(index)) {
      setSelectedQuestions(selectedQuestions.filter((i) => i !== index));
    } else {
      setSelectedQuestions([...selectedQuestions, index]);
    }
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
    setSelectedQuestions([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />
      <View style={styles.contentContainer}>
        <Text style={styles.headingText}>Question</Text>
        <Text style={styles.descriptionText}>
          Formulate questions you want to be answered in this topic.
        </Text>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={openModal}>
            <AddButton />
          </TouchableOpacity>
        </View>
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity onPress={toggleDeleteMode}>
            <DeleteButton />
          </TouchableOpacity>
        </View>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <AntDesign name="close" size={35} color="gray" />
              </TouchableOpacity>
              <Text style={styles.modalHeadingText}>Question</Text>
              <TextInput
                style={styles.input}
                value={question}
                onChangeText={handleQuestionChange}
                placeholder="Enter your question"
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={saveQuestion}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.questionList}>
          {savedQuestions.map((savedQuestion, index) => (
            <View style={styles.questionContainer} key={index}>
              {isDeleteMode && (
                <CheckBox
                  value={selectedQuestions.includes(index)}
                  onValueChange={() => toggleQuestionSelection(index)}
                />
              )}
              <Text style={styles.questionText}>{`${
                index + 1
              }. ${savedQuestion}`}</Text>
            </View>
          ))}
        </ScrollView>
        {isDeleteMode && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={deleteQuestions}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headingText: {
    fontFamily: "AmaticBold",
    fontSize: 40,
    color: colors.pink,
    marginTop: 80,
    letterSpacing: 4,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  addButtonContainer: {
    position: "absolute",
    top: 280,
    right: 60,
  },
  deleteButtonContainer: {
    position: "absolute",
    top: 200,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 268,
    width: 254,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalHeadingText: {
    fontFamily: "AmaticBold",
    fontSize: 40,
    textAlign: "center",
    color: colors.pink,
    marginTop: 30,
  },
  input: {
    width: "85%",
    height: "18%",
    alignSelf: "center",
    backgroundColor: colors.ligtherPink,
    borderBottomColor: colors.pink,
    borderBottomWidth: 1,
    paddingLeft: 10,
    marginTop: 13,
  },
  saveButton: {
    backgroundColor: colors.pink,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  questionList: {
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  questionText: {
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: colors.pink,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: "30%",
    height: 50,
    justifyContent: "center",
    alignItems: "center", // Add this line to center the text
  },
  deleteButtonText: {
    fontFamily: "AmaticBold",
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default SQ3RQuestion;
