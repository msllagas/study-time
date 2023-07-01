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

import { colors } from "../../../../utils/colors";

import Constants from "expo-constants";
const SpacedRepititionNotif = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const _goBack = () => navigation.goBack();

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
            }}
          >
            June 1 - July 6
          </Text>
          <View style={styles.sessionContainer}>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                fontFamily: "AlumniSansRegular",
              }}
            >
              Session 1:
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontFamily: "FuzzyBubblesBold",
              }}
            >
              June 1, 2023
            </Text>
          </View>
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
          <View style={styles.notifContainer}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
              }}
            >
              Alarm
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
    marginVertical: "20px",
  },
  notifContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "70px",
  },
  viewContainer: {
    paddingTop: Constants.statusBarHeight,
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
