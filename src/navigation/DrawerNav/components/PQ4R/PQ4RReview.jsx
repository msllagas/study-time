import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import PQ4RNav from "./PQ4RNav";
import { colors } from "../../../../utils/colors";
import { useAppContext } from "../../../../context/AppContext";

const PQ4RReview = () => {
  const activeComponent = "review";
  const {
    savedpqAnswers,
    pqsavedQuestions,
    setSavedpqAnswers,
    setPqSavedQuestions,
    summarypqText,
  } = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: "AmaticBold",
              letterSpacing: 4,
              color: colors.skyBlue,
              fontSize: 40,
              textAlign: "center",
              marginTop: 60,
            }}
          >
            Review
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Review the material as often as {"\n"} possible.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              letterSpacing: 4,
              fontFamily: "AmaticBold",
              fontWeight: "bold",
              fontSize: 30,
              color: colors.skyBlue,
              letterSpacing: 4,
              textAlign: "center",
            }}
          >
            Summary
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.skyBlue,
              borderRadius: 10,
              padding: 10,
              height: 500,
              marginTop: 20,
              width: "90%",
            }}
          >
            <Text>{summarypqText}</Text>{" "}
            {/* Display the value of summarypqText */}
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 40,
              letterSpacing: 4,
              fontFamily: "AmaticBold",
              fontWeight: "bold",
              fontSize: 30,
              color: colors.skyBlue,
              letterSpacing: 4,
              textAlign: "center",
            }}
          >
            Q&A
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.skyBlue,
                borderRadius: 10,
                padding: 10,
                marginTop: 20,
                height: 500,
                width: "90%",
              }}
            >
              {pqsavedQuestions.map((question, index) => (
                <View key={index}>
                  <Text
                    style={{
                      fontFamily: "AmaticBold",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: colors.skyBlue,
                      marginRight: 10,
                    }}
                  >
                    Q:
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "AmaticBold",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      {question}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: "AmaticBold",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: colors.skyBlue,
                      marginRight: 10,
                    }}
                  >
                    A:
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "AmaticBold",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      {savedpqAnswers[index]}
                    </Text>
                  </Text>
                </View>
              ))}
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
};

export default PQ4RReview;
