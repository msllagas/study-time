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

const PQ4RNav = ({ activeComponent }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const togglePreview = () => {
    navigation.navigate("PQ4RPreview");
  };
  const toggleQuestion = () => {
    navigation.navigate("PQ4RQuestion");
  };
  const toggleRead = () => {
    navigation.navigate("PQ4RRead");
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
                  {
                    backgroundColor:
                      activeComponent === "preview" ? "#608BF9" : "transparent",
                  },
                ]}
                onPress={togglePreview}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        activeComponent === "preview" ? "white" : "#608BF9",
                      fontFamily: "AmaticBold",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "question"
                        ? "#608BF9"
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
                        activeComponent === "question" ? "white" : "#608BF9",
                      fontFamily: "AmaticBold",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "read" ? "#608BF9" : "transparent",
                  },
                ]}
                onPress={toggleRead}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: activeComponent === "read" ? "white" : "#608BF9",
                      fontFamily: "AmaticBold",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "reflect" ? "#608BF9" : "transparent",
                  },
                ]}
                onPress={toggleReflect}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        activeComponent === "reflect" ? "white" : "#608BF9",
                      fontFamily: "AmaticBold",
                    },
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
                  {
                    backgroundColor:
                      activeComponent === "recite" ? "#608BF9" : "transparent",
                  },
                ]}
                onPress={toggleRecite}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: activeComponent === "recite" ? "white" : "#608BF9",
                      fontFamily: "AmaticBold",
                    },
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
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      activeComponent === "review" ? "#608BF9" : "transparent",
                  },
                ]}
                onPress={toggleReview}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: activeComponent === "review" ? "white" : "#608BF9",
                      fontFamily: "AmaticBold",
                    },
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

export default PQ4RNav;
