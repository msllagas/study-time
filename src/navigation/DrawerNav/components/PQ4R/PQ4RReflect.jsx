import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import PQ4RNav from "./PQ4RNav";
import { useAppContext } from "../../../../context/AppContext";

const PQ4RReflect = () => {
  const activeComponent = "reflect";
  const { pqsavedQuestions } = useAppContext(); // Access pqsavedQuestions from AppContext

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
            <Text key={index} style={styles.questionText}>
              {index + 1}. {question}
            </Text>
          ))}
        </ScrollView>
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
});

export default PQ4RReflect;
