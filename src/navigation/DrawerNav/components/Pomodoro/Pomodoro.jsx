import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../../TopTabNav/TopBar";
import { colors } from "../../../../utils/colors";
import AddButton from "../../../../components/AddButton";
import Constants from "expo-constants";
import Done from "../../../../components/Done";
import Ongoing from "../../../../components/Ongoing";
import TopicCard from "../../../../components/TopicCard";

function Dones() {
  return <Done tag="pomodoro"></Done>;
}
const Pomodoro = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TopBar Done={Done} Ongoing={Ongoing} tag="pomodoro" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.white,
  },
  addBtn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});

export default Pomodoro;
