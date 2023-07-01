import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
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
import React from "react";
import { colors } from "../../../../utils/colors";
import CalendarDate from "../../../../components/CalendarDate";
import AddButton from "../../../../components/AddButton";
import TopBar from "../../../TopTabNav/TopBar";
import Done from "../../../../components/Done";
import Ongoing from "../../../../components/Ongoing";

const SpacedRepitition = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <Text
          style={{
            fontFamily: "AmaticBold",
            fontSize: 48,
            textAlign: "center",
            color: colors.redOrange,
            marginTop: 20,
          }}
        >
          My Schedule
        </Text>
      </PaperProvider>
      <CalendarDate />

      <TopBar Done={Done} Ongoing={Ongoing} tag="pomodoro" />

      <AddButton
        onPressAdd={() => navigation.navigate("SpacedRepititionAdd")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.white,
  },
});

export default SpacedRepitition;
