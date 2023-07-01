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
import PQ4RQuestion from "./PQ4RQuestion";

const PQ4RRead = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const togglePreview = () => {
    navigation.navigate("PQ4RPreview");
  };
  const toggleQuestion = () => {
    navigation.navigate("PQ4RQuestion");
  };

  const toggleReflect = () => {
    navigation.navigate("PQ4RReflect");
  };
  const toggleRecite = () => {
    navigation.navigate("PQ4RRecite");
  };
  const toggleReview = () => {
    navigation.navigate("PQ4RReview");
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
                  { backgroundColor: isFocused ? "transparent" : "#608BF9" },
                ]}
                onPress={togglePreview}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#608BF9" : "#FFFFFF" },
                  ]}
                >
                  P
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#608BF9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#608BF9" },
                ]}
                onPress={toggleQuestion}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#608BF9" : "#FFFFFF" },
                  ]}
                >
                  Q
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#608BF9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "#608BF9" : "transparent" },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "white" : "#608BF9" },
                  ]}
                >
                  R1
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#608BF9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#608BF9" },
                ]}
                onPress={toggleReflect}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#608BF9" : "white" },
                  ]}
                >
                  R2
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#608BF9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#608BF9" },
                ]}
                onPress={toggleRecite}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#608BF9" : "white" },
                  ]}
                >
                  R3
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={60}
                color="#608BF9"
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: isFocused ? "transparent" : "#608BF9" },
                ]}
                onPress={toggleReview}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#608BF9" : "white" },
                  ]}
                >
                  R4
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
    borderColor: "#608BF9",
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

export default PQ4RRead;
