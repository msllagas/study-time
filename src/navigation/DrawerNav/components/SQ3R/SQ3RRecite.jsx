import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import SQ3RNav from "./SQ3RNav";

const SQ3RRecite = () => {
  const activeComponent = "recite";
  return (
    <SafeAreaView style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
};

export default SQ3RRecite;
