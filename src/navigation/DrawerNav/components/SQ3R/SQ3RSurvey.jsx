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

const SQ3RSurvey = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const toggleQuestion = () => {
    navigation.navigate("SQ3RQuestion");
  };
  const toggleRead = () => {
    navigation.navigate("SQ3RRead");
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
                  { backgroundColor: isFocused ? "#DA60F9" : "transparent" },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "white" : "pink" },
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
                  { backgroundColor: isFocused ? "transparent" : "#DA60F9" },
                ]}
                onPress={toggleRead}
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
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#DA60F9" : "white" },
                  ]}
                  onPress={toggleRecite}
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
  scrollViewContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  contentContainer: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 30,
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

export default SQ3RSurvey;
