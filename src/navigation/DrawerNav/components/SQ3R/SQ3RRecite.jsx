import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import SQ3RNav from "./SQ3RNav";
import { colors } from "../../../../utils/colors";
import { useAppContext } from "../../../../context/AppContext"; //the path to the AppProvider

const SQ3RRecite = () => {
  const activeComponent = "recite";
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [inputText, setInputText] = useState("");
  const { savedQuestions, setSavedQuestions } = useAppContext(); // Access savedQuestions and setSavedQuestions from AppContext
  const { savedAnswers, setSavedAnswers } = useAppContext(); // state variable for storing the saved answers
  const { summaryText, setSummaryText } = useAppContext();

  const handleSummaryChange = (text) => {
    setSummaryText(text);
  };

  const handleUpdateButton = () => {
    const updatedSummary = summaryText.join(""); // Join array elements into a single string without a separator
    setSummaryText(updatedSummary);
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleQuestionSelection = (question) => {
    setSelectedQuestion(question);
  };

  const handleSave = () => {
    if (selectedQuestion && inputText) {
      // Check if a question is selected and input is provided
      const question = `${selectedQuestion}`;
      const answer = `${inputText}`;

      const savedEntry = {
        question: question,
        answer: answer,
      };

      setSavedAnswers([...savedAnswers, savedEntry]); // Store the question and answer in the savedAnswers array
      setInputText("");
      setSelectedQuestion("");
    }
  };

  const deleteAnswerIfQuestionDeleted = () => {
    const updatedAnswers = savedAnswers.filter((entry) =>
      savedQuestions.includes(entry.question)
    );
    setSavedAnswers(updatedAnswers);
  };

  useEffect(() => {
    deleteAnswerIfQuestionDeleted();
  }, [savedQuestions]);

  return (
    <SafeAreaView style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />

      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <Text
          style={{
            fontFamily: "AmaticBold",
            fontSize: 40,
            color: colors.pink,
            marginTop: 80,
            letterSpacing: 4,
          }}
        >
          Recite
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Summarize what you've learned.
        </Text>

        <View style={{ height: 500, width: 380 }}>
          <TextInput
            style={{
              flex: 1,
              borderColor: "#DA60F9",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              textAlign: "left",
            }}
            multiline={true}
            value={summaryText}
            onChangeText={handleSummaryChange}
          />
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={showModal} style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleUpdateButton}
          >
            <Text style={styles.saveButtonLabel}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Picker
              style={styles.picker}
              selectedValue={selectedQuestion}
              onValueChange={handleQuestionSelection}
            >
              <Picker.Item label="Select a question" value="" />
              {savedQuestions.map((question, index) => (
                <Picker.Item
                  key={index}
                  label={`${index + 1}. ${question}`}
                  value={question}
                />
              ))}
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Type your answer..."
              placeholderTextColor="#808080"
              value={inputText}
              onChangeText={setInputText}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={hideModal}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 40,
  },
  addButton: {
    backgroundColor: "#DA60F9",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonLabel: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#DA60F9",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonLabel: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    width: 328,
    height: 193,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: "90%",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: colors.pink,
    borderRadius: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#DA60F9",
    width: "85%",
    borderRadius: 10,
    marginBottom: 20,
    height: 35,
    padding: 20,
    fontStyle: "italic",
  },
  modalButtonContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  modalButton: {
    backgroundColor: "#F3D4FB",
    padding: 10,
    borderRadius: 10,
    width: "95%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderColor: "#DA60F9",
    borderWidth: 1,
  },
  modalButtonText: {
    color: "#DA60F9",
    textAlign: "center",
    fontSize: 16,
  },
};

export default SQ3RRecite;
