import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";

const SQ3RSurvey = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const toggleQuestion = () => {
    // Perform any save logic here

    // Navigate to "SQ3RSurvey" screen
    navigation.navigate("SQ3RQuestion");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isFocused ? "#DA60F9" : "transparent" },
          ]}
        >
          <Text
            style={[styles.buttonText, { color: isFocused ? "white" : "pink" }]}
          >
            S
          </Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <AntDesign name="right" size={60} color="#DA60F9" />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isFocused ? "#DA60F9" : "white" },
            ]}
            onPress={toggleQuestion}
          >
            Q
          </Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <AntDesign name="right" size={60} color="#DA60F9" />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isFocused ? "#DA60F9" : "white" },
            ]}
          >
            R1
          </Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <AntDesign name="right" size={60} color="#DA60F9" />
        </View>
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 20,
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#DA60F9",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 40,
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
};

export default SQ3RSurvey;
