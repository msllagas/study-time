import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign component
import PQ4RNav from "./PQ4RNav";
import PQ4RKeywordDisplay from "./PQ4RKeywordDisplay";
import { colors } from "../../../../utils/colors";
import { useAppContext } from "../../../../context/AppContext";

const PQ4RPreview = () => {
  const activeComponent = "preview";
  const navigation = useNavigation(); // Define navigation using useNavigation hook
  const _goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={_goBack}>
        <AntDesign name="arrowleft" size={40} /> {/* Add AntDesign component */}
      </TouchableOpacity>
      <PQ4RNav activeComponent={activeComponent} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Preview</Text>
        <Text style={styles.subtitle}>
          Enter keywords while {"\n"} skimming your material.
        </Text>
        <PQ4RKeywordDisplay />
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
    top: 10,
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
    color: colors.skyBlue,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
});

export default PQ4RPreview;
