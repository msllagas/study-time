import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig";
import { useAppContext } from "../../../../context/AppContext";
import SQ3RNav from "./SQ3RNav";
import AddButton from "../../../../components/AddButton";
import { colors } from "../../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const SQ3RReview = () => {
  const navigation = useNavigation();
  const activeComponent = "review";
  const { sq3rTopicName, savedQuestions, savedAnswers, summaryText } =
    useAppContext();

  const addTopicToFirestore = async () => {
    try {
      const currentUser = FIREBASE_AUTH.currentUser;
      const userId = currentUser.uid;

      const topicData = {
        userId: userId,

        title: sq3rTopicName,
        description: "This is a new topic added to Firestore.",
        tag: "sq3r",
        isDone: false,
        createdAt: new Date(),
        technique: {
          savedAnswers: savedAnswers,
          summaryText: summaryText,
        },
      };
      await addDoc(collection(FIRESTORE_DB, "topics"), topicData);
      console.log("it is working");
      navigation.navigate("SQ3RDone");
    } catch (error) {
      console.error("Error adding topic:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />

      <ScrollView style={styles.contentContainer}>
        <View>
          <Text
            style={{
              fontFamily: "AmaticBold",
              letterSpacing: 4,
              color: colors.pink,
              fontSize: 40,
              textAlign: "center",
              marginTop: 60,
            }}
          >
            Review
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Review the material as often as {"\n"} possible.
          </Text>
        </View>

        <View style={{ marginBottom: 50 }}>
          <Text
            style={{
              letterSpacing: 4,
              fontFamily: "AmaticBold",
              fontWeight: "bold",
              fontSize: 30,
              color: colors.pink,
              letterSpacing: 4,
              textAlign: "center",
            }}
          >
            Summary
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.pink,
              borderRadius: 10,
              padding: 10,
              height: 500,
              marginTop: 20,
            }}
          >
            <Text>{summaryText}</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              letterSpacing: 4,
              fontFamily: "AmaticBold",
              fontWeight: "bold",
              fontSize: 30,
              color: colors.pink,
              letterSpacing: 4,
              textAlign: "center",
            }}
          >
            Q&A
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.pink,
              borderRadius: 10,
              padding: 10,
              height: 500,
              marginTop: 20,
            }}
          >
            {savedAnswers.map((entry, index) => (
              <View key={index} style={styles.entryContainer}>
                <View
                  style={{
                    marginBottom: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "AmaticBold",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: colors.pink,
                      marginRight: 10,
                    }}
                  >
                    Q:
                  </Text>
                  <Text style={styles.questionText}>{entry.question}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      fontFamily: "AmaticBold",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: colors.pink,
                      marginRight: 10,
                    }}
                  >
                    A:
                  </Text>
                  <Text style={styles.answerText}>{entry.answer}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#DA60F9",
              padding: 10,
              borderRadius: 10,
              width: "40%",
              height: 50,
              marginTop: 40,
            }}
            onPress={addTopicToFirestore}
          >
            <Text
              style={{ color: "#FFFFFF", textAlign: "center", fontSize: 16 }}
            >
              Save
            </Text>
          </TouchableOpacity>
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
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  entryContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontFamily: "AmaticBold",
  },
  answerText: {
    fontSize: 20,
    fontFamily: "AmaticBold",
    fontWeight: "bold",
  },
  summaryText: {
    fontSize: 20,
    fontFamily: "AmaticBold",
    marginBottom: 10,
    textAlign: "center",
  },
};

export default SQ3RReview;
