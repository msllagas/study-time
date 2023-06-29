import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  Button,
  Appbar,
  IconButton,
  TextInput,
  Modal,
  Portal,
  Text,
  PaperProvider,
} from "react-native-paper";
import CalendarPicker from "react-native-calendar-picker";
import { colors } from "../../../../utils/colors";

import Constants from "expo-constants";

const SpacedRepititionDateStart = ({ navigation }) => {
  const [startDate, setStartDate] = useState(null);
  const _goBack = () => navigation.goBack();

  const onDateChange = (date) => {
    setStartDate(date);
  };
  return (
    <SafeAreaView sstyle={styles.viewContainer}>
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
              color: colors.green,
              marginTop: 20,
            }}
          >
            Start When
          </Text>
          <CalendarPicker onDateChange={onDateChange} />
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SpacedRepititionDateEnd")}
            style={{
              borderRadius: 8,
              width: "70%",
              alignSelf: "center",
              marginVertical: 30,
              backgroundColor: colors.beige,
            }}
          >
            Set-up Start Date
          </Button>
        </PaperProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default SpacedRepititionDateStart;
