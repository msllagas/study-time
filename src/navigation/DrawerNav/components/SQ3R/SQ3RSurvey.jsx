import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import KeywordDisplay from "./KeywordDisplay";
import SQ3RNav from "./SQ3RNav";

const SQ3RSurvey = () => {
  const activeComponent = "survey";
  return (
    <SafeAreaView style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <KeywordDisplay />
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
};

export default SQ3RSurvey;
