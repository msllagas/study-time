import React from "react";
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

import Constants from "expo-constants";
import { useAppContext } from "../../../../context/AppContext";
const SpacedRepititionNotif = ({ navigation }) => {
  const { startDate, endDate, numSessions } = useAppContext();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const _goBack = () => navigation.goBack();

  function SpacedRepetition(numSessions) {
    const sessions = [];
    const schedule = {};

    function generateSessions() {
      for (let i = 0; i < numSessions; i++) {
        sessions.push({
          session: `Session ${i + 1}`,
          repetitions: 0,
          scheduledDays: [],
        });
      }
    }

    function generateSchedule(days) {
      const sessionInterval = Math.ceil(days / numSessions);

      let dayOffset = 0;

      for (let i = 0; i < numSessions; i++) {
        const session = sessions[i];
        const scheduledDay = dayOffset + 1;
        session.scheduledDays.push(scheduledDay);
        dayOffset = dayOffset + sessionInterval + i;
      }

      for (let i = 0; i < days; i++) {
        const formattedDate = getFormattedDate(i);
        schedule[formattedDate] = [];

        for (const session of sessions) {
          if (session.scheduledDays.includes(i + 1)) {
            schedule[formattedDate].push(session.session);
          }
        }
      }
    }

    function getFormattedDate(dayOffset) {
      const currentDate = startDate.toDate();
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + dayOffset
      );
      return date.toISOString().split("T")[0];
    }

    function getSchedule() {
      return schedule;
    }

    generateSessions();

    return {
      generateSchedule,
      getSchedule,
    };
  }

  const days = endDate.diff(startDate, "days");

  // Usage example
  // const numSessions = 5; // Number of sessions
  // const days = 15; // Number of days to generate the schedule

  const spacedRepetition = SpacedRepetition(numSessions);

  spacedRepetition.generateSchedule(days);

  const schedule = spacedRepetition.getSchedule();
  console.log("Generated Schedule:", schedule);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <ScrollView style={{ paddingBottom: 20 }}>
        <PaperProvider>
          <IconButton
            icon="arrow-left"
            style={styles.backButton}
            size={40}
            onPress={_goBack}
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
            My Schedule
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

          <View style={styles.notifContainer}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
              }}
            >
              Notify Me
            </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>

          <Button
            mode="contained"
            onPress={() => navigation.navigate("SpacedRepititionDateStart")}
            style={{
              borderRadius: 8,
              width: "70%",
              alignSelf: "center",
              marginVertical: 30,
              backgroundColor: colors.beige,
            }}
          >
            Save
          </Button>
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

export default SpacedRepititionNotif;
