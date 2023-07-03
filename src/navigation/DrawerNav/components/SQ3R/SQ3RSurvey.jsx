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
import { colors } from "../../../../utils/colors";

const SQ3RSurvey = () => {
  const activeComponent = "survey";
  return (
    <View style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <Text
          style={{
            fontFamily: "AmaticBold",
            fontSize: 40,
            color: colors.pink,
            marginTop: 80,
            letterSpacing: 4,
          }}
        >
          Survey
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Enter keywords while {"\n"} skimming you material.
        </Text>
        <KeywordDisplay />
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
};

export default SQ3RSurvey;
