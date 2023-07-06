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

import Constants from "expo-constants";
import { useAppContext } from "../../../../context/AppContext";

const SpacedRepititionDone = ({ navigation }) => {
  const { startDate, endDate, schedule } = useAppContext();

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
            Topic 1
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

export default SpacedRepititionDone;
