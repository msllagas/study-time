import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PQ4RNav from "./PQ4RNav";
import { useAppContext } from "../../../../context/AppContext";

const PQ4RReflect = () => {
  const activeComponent = "reflect";
  const { pqsavedQuestions } = useAppContext();
  const { savedpqAnswers, setSavedpqAnswers } = useAppContext();

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(pqsavedQuestions.map(() => ""));
  }, [pqsavedQuestions]);

  useEffect(() => {
    setSavedpqAnswers(answers);
  }, [answers]);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSave = () => {
    // Do further processing with answers if needed
    setSavedpqAnswers(answers);
  };

  const deleteAnswerIfQuestionDeleted = () => {
    const updatedAnswers = answers.filter((_, index) =>
      pqsavedQuestions.includes(index)
    );
    setAnswers(updatedAnswers);
  };

  useEffect(() => {
    deleteAnswerIfQuestionDeleted();
  }, [pqsavedQuestions]);

  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <View style={styles.contentContainer}>
        <Text style={styles.headingText}>Reflect</Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Answer your questions.
        </Text>
        <ScrollView style={styles.questionList}>
          {pqsavedQuestions.map((question, index) => (
            <View key={index}>
              <Text style={styles.questionText}>
                {index + 1}. {question}
              </Text>
              <TextInput
                style={styles.answerInput}
                value={answers[index]}
                onChangeText={(answer) => handleAnswerChange(index, answer)}
                placeholder="type your answer"
                placeholderTextColor="#808080"
              />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
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
    paddingBottom: 20,
  },
  headingText: {
    fontFamily: "AmaticBold",
    fontSize: 40,
    color: "#608BF9",
    marginTop: 80,
    letterSpacing: 4,
  },
  questionList: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  answerInput: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderBottomColor: "#608BF9",
    borderBottomWidth: 1,
    fontStyle: "italic",
    padding: 10,
  },
  saveButton: {
    width: 120,
    height: 47,
    backgroundColor: "#608BF9",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
  },
});

export default PQ4RReflect;
