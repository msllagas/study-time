import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import PQ4RNav from "./PQ4RNav";

const PQ4RRead = () => {
  const activeComponent = "read";
  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <Text>Read</Text>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
};

export default PQ4RRead;
