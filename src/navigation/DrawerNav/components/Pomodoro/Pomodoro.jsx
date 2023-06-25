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

const Pomodoro = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("PomodoroDone")}>
        <Text>go to DONE</Text>
      </Pressable>

      <TopBar />

      <AddButton 
      onPress={() => navigation.navigate("PomodoroAdd")}
      />
    </View>
  );
};

export default Pomodoro;
