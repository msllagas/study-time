import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import PQ4RNav from "./PQ4RNav";
import { colors } from "../../../../utils/colors";
import { useAppContext } from "../../../../context/AppContext";

const PQ4RReview = () => {
  const activeComponent = "review";
  const {
    savedpqAnswers,
    pqsavedQuestions,
    setSavedpqAnswers,
    setPqSavedQuestions,
    summarypqText,
  } = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Review</Text>
          <Text style={styles.sectionSubtitle}>
            Review the material as often as possible.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <View style={styles.summaryContainer}>
            <Text>{summarypqText}</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Q&A</Text>
          <View style={styles.qaContainer}>
            {pqsavedQuestions.map((question, index) => (
              <View key={index}>
                <Text style={styles.questionTitle}>
                  Q: <Text style={styles.questionText}>{question}</Text>
                </Text>
                <Text style={styles.answerTitle}>
                  A:{" "}
                  <Text style={styles.answerText}>{savedpqAnswers[index]}</Text>
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: "AmaticBold",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.skyBlue,
    letterSpacing: 4,
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  summaryContainer: {
    borderWidth: 1,
    borderColor: colors.skyBlue,
    borderRadius: 10,
    padding: 10,
    height: 500,
    marginTop: 20,
    width: "90%",
  },
  qaContainer: {
    borderWidth: 1,
    borderColor: colors.skyBlue,
    borderRadius: 10,
    padding: 10,
    height: 500,
    marginTop: 20,
    width: "90%",
  },
  questionTitle: {
    fontFamily: "AmaticBold",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.skyBlue,
    marginRight: 10,
  },
  questionText: {
    fontSize: 20,
    fontFamily: "AmaticBold",
    fontWeight: "bold",
    marginLeft: 10,
  },
  answerTitle: {
    fontFamily: "AmaticBold",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.skyBlue,
    marginRight: 10,
  },
  answerText: {
    fontSize: 20,
    fontFamily: "AmaticBold",
    fontWeight: "bold",
    marginLeft: 10,
  },
};

export default PQ4RReview;
