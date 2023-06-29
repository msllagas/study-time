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
import { colors } from "../../../../utils/colors";

import { Button, Appbar } from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import TopBar from "../../../TopTabNav/TopBar";
import Done from "../../../../components/Done";
import Ongoing from "../../../../components/Ongoing";

const SpacedRepitition = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
