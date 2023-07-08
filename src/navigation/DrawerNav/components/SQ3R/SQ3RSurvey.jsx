import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import SQ3RNav from "./SQ3RNav";
import { colors } from "../../../../utils/colors";
import SQ3RKeywordDisplay from "./SQ3RKeywordDisplay";

const SQ3RSurvey = () => {
  const activeComponent = "survey";
  const navigation = useNavigation(); // Define navigation using useNavigation hook
  const _goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={_goBack}>
        <AntDesign name="arrowleft" size={40} />
      </TouchableOpacity>
      <SQ3RNav activeComponent={activeComponent} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Survey</Text>
        <Text style={styles.subtitle}>
          Enter keywords while{"\n"}skimming your material.
        </Text>
        <SQ3RKeywordDisplay />
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontFamily: "AmaticBold",
    fontSize: 40,
    color: colors.pink,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default SQ3RSurvey;
