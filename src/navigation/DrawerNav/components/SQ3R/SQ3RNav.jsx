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
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
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
                    fontFamily: "AmaticBold",
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
                    activeComponent === "question" ? "#DA60F9" : "transparent",
                },
              ]}
              onPress={toggleQuestion}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: activeComponent === "question" ? "white" : "#DA60F9",
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
                  {
                    color: activeComponent === "read" ? "white" : "#DA60F9",
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
                    fontFamily: "AmaticBold",
                  },
                ]}
              >
                R3
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
  },
  scrollViewContainer: {
    height: 100,
  },
  contentContainer: {
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
};

export default SQ3RNav;
