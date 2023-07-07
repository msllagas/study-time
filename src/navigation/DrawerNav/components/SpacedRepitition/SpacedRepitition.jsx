import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { Card, Text, PaperProvider } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import CalendarDate from "../../../../components/CalendarDate";
import AddButton from "../../../../components/AddButton";
import TopBar from "../../../TopTabNav/TopBar";
import Header from "../../../../components/Header";
import { useAppContext } from "../../../../context/AppContext";

const SpacedRepitition = ({ navigation }) => {
  const { date, setDate } = useAppContext();


  const onDateChange = (date) => {
    console.log(date);
    setDate(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
      <Header title="Spaced Repetition" onPressBackArrow={() => navigation.goBack()}/>
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

      <TopBar tag="spaced repetition" />

      <AddButton
        onPressAdd={() => navigation.navigate("SpacedRepititionAdd")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  container: {
    height: "100%",
    backgroundColor: colors.white,
  },
});

export default SpacedRepitition;
