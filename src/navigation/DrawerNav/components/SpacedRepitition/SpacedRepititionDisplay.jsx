import React, { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import {
  Button,
  Appbar,
  IconButton,
  TextInput,
  Modal,
  Portal,
  Text,
  PaperProvider,
  Switch,
} from "react-native-paper";
import CalendarDate from "../../../../components/CalendarDate";
import moment from "moment";

import { colors } from "../../../../utils/colors";

import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig";
import { Timestamp } from "firebase/firestore";

const SpacedRepititionDisplay = ({ route, navigation }) => {
  const { topicId } = route.params;
  const [fetchedData, setFetchedData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [topicName, setTopicName] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const topicRef = doc(FIRESTORE_DB, "topics", topicId);
        const data = await getDoc(topicRef);
        console.log(data.data());

        setStartDate(data.data()?.technique?.startDate?.seconds);
        const startTimeStampSeconds =
          data.data()?.technique?.startDate?.seconds;
        setEndDate(data.data()?.technique?.endDate?.seconds);
        const endDateTimeStampSeconds =
          data.data()?.technique?.endDate?.seconds;

        setSchedule(data.data()?.technique?.schedule);
        setTopicName(data.data()?.title);
        const conStart = new Date(
          startTimeStampSeconds * 1000
        ).toLocaleDateString();

        const conEnd = new Date(
          endDateTimeStampSeconds * 1000
        ).toLocaleDateString();
        setStartDate(conStart);
        setEndDate(conEnd);

        console.log(conStart);
        console.log(conEnd);
        console.log("Topic fetched");
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopic();
  }, []);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <ScrollView style={{ paddingBottom: 20 }}>
        <PaperProvider>
          <IconButton
            icon="arrow-left"
            style={styles.backButton}
            size={40}
            onPress={() => navigation.navigate("SpacedRepitition")}
          />
          <Text
            style={{
              fontFamily: "AmaticBold",
              fontSize: 48,
              textAlign: "center",
              color: colors.beige,
              marginTop: 20,
            }}
          >
            {topicName}
          </Text>
          <Text
            style={{
              fontFamily: "FuzzyBubblesBold",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            {moment(startDate).format("MMMM Do")} -{" "}
            {moment(endDate).format("MMMM Do")}
          </Text>

          {Object.entries(schedule).map(
            ([date, sessions]) =>
              sessions.length !== 0 && (
                <View style={styles.sessionContainer} key={date}>
                  {sessions.map((session) => (
                    <Text
                      style={{
                        color: "black",
                        fontSize: 30,
                        fontFamily: "AlumniSansRegular",
                      }}
                      key={session}
                    >
                      {session}
                    </Text>
                  ))}

                  <Text
                    style={{
                      color: "black",
                      fontSize: 18,
                      fontFamily: "FuzzyBubblesBold",
                    }}
                  >
                    {date}
                  </Text>
                </View>
              )
          )}
        </PaperProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sessionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "70px",
    marginVertical: "5px",
  },
  notifContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "70px",
    marginTop: 20,
  },
  viewContainer: {
    height: "100%",
    backgroundColor: colors.white,
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  imageContainer: {
    alignSelf: "center",
    width: "50px",
    marginTop: 20,
  },
  setupContainer: {
    width: "70%",
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  largeText: {
    fontFamily: "AmaticBold",
    fontSize: 32,
    color: colors.beige,
  },
  smallText: {
    fontFamily: "AmaticRegular",
    fontSize: 16,
    color: colors.beige,
  },
  setupInput: {
    width: "30%",
    alignSelf: "center",
    backgroundColor: colors.lighterYellow,
    textAlign: "center",
  },
});

export default SpacedRepititionDisplay;
