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

const SQ3RNav = ({ activeComponent }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const toggleSurvey = () => {
    navigation.navigate("SQ3RSurvey");
  };

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
                  {
                    backgroundColor:
                      activeComponent === "survey" ? "#DA60F9" : "transparent",
                  },
                ]}
                onPress={toggleSurvey}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: activeComponent === "survey" ? "white" : "#DA60F9",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "question"
                        ? "#DA60F9"
                        : "transparent",
                  },
                ]}
                onPress={toggleQuestion}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        activeComponent === "question" ? "white" : "#DA60F9",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "read" ? "#DA60F9" : "transparent",
                  },
                ]}
                onPress={toggleRead}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: activeComponent === "read" ? "white" : "#DA60F9" },
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
                  {
                    backgroundColor:
                      activeComponent === "recite" ? "#DA60F9" : "transparent",
                  },
                ]}
                onPress={toggleRecite}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: activeComponent === "recite" ? "white" : "#DA60F9",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "review" ? "#DA60F9" : "transparent",
                  },
                ]}
                onPress={toggleReview}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: activeComponent === "review" ? "white" : "#DA60F9",
                    },
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

export default SQ3RNav;
