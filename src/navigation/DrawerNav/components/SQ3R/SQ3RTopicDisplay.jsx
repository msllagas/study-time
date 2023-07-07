import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Button,
  Appbar,
  IconButton,
  TextInput,
  Modal,
  Portal,
  Card,
  PaperProvider,
} from "react-native-paper";
import { useAppContext } from "../../../../context/AppContext";
import SQ3RNav from "./SQ3RNav";
import AddButton from "../../../../components/AddButton";
import { colors } from "../../../../utils/colors";

import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig";

const SQ3RTopicDisplay = ({ route, navigation }) => {
  const { topicId } = route.params;

  const [topicName, setTopicName] = useState("");
  const [savedAnswers, setSavedAnswers] = useState([]);
  const [summaryText, setSummaryText] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const topicRef = doc(FIRESTORE_DB, "topics", topicId);
        const data = await getDoc(topicRef);
        console.log(data.data());

        setSavedAnswers(data.data()?.technique?.savedAnswers);

        setSummaryText(data.data()?.technique?.summaryText);

        setTopicName(data.data()?.title);

        console.log("Topic fetched");
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopic();
  }, []);

  const _goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <PaperProvider>
          <IconButton
            icon="arrow-left"
            style={styles.backButton}
            size={40}
            onPress={_goBack}
          />
        </PaperProvider>
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
            {topicName}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            This is date
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
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
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

export default SQ3RTopicDisplay;
