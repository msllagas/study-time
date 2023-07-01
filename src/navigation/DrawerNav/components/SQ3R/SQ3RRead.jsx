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

const SQ3RRead = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const toggleSurvey = () => {
    navigation.navigate("SQ3RSurvey");
  };
  const toggleQuestion = () => {
    navigation.navigate("SQ3RQuestion");
  };
  const toggleRecite = () => {
    navigation.navigate("SQ3RRecite");
  };
  const toggleReview = () => {
    navigation.navigate("SQ3RReview");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.scrollViewContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
                ]}
                onPress={toggleSurvey}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#DA60F9" : "white" },
                  ]}
                >
                  S
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#DA60F9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
                ]}
                onPress={toggleQuestion}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#DA60F9" : "white" },
                  ]}
                >
                  Q
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#DA60F9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "#DA60F9" : "transparent" },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "white" : "#DA60F9" },
                  ]}
                >
                  R1
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#DA60F9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
                ]}
                onPress={toggleRecite}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#DA60F9" : "white" },
                  ]}
                >
                  R2
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#DA60F9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
                ]}
                onPress={toggleReview}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#DA60F9" : "white" },
                  ]}
                >
                  R3
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 30,
  },
  contentContainer: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
};

export default SQ3RRead;
