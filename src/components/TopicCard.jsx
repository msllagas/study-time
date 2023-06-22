import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Chip } from "react-native-paper";
import React from "react";
import { colors } from "../utils/colors";

const TopicCard = ({ tag, topic="Topic Here" }) => {
  let backgroundColor;
  let borderColor;
  let method;

  if (tag === "pomodoro") {
    backgroundColor = colors.violet;
    borderColor = colors.violet;
    method = 'Pomodoro Technique'
  } else if (tag === "spaced repetition") {
    backgroundColor = colors.beige;
    borderColor = colors.beige;
    method = 'Spaced Repetition'
  } else if (tag === "active recall") {
    backgroundColor = colors.green;
    borderColor = colors.green;
    method = 'Active Recall'
  } else if (tag === "pq4r") {
    backgroundColor = colors.skyBlue;
    borderColor = colors.skyBlue;
    method = 'PQ4R Method'
  } else if (tag === "sq3r") {
    backgroundColor = colors.purple;
    borderColor = colors.purple;
    method = 'SQ3R Method'
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.textContainer, { backgroundColor, borderColor }]}>
        <Text style={[styles.text]}>{method}</Text>
      </Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { borderColor }]}>
          <Text style={styles.topicText}>{topic}</Text>
          <Text>Icon Here</Text>
        </View>
      </View>
    </View>
  );
};

export default TopicCard;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  card: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    position: "relative",
    flexDirection: "row",
  },
  cardContainer: {
    width: windowWidth * 0.9,
    alignSelf: "center",
    marginVertical: 5,
  },
  textContainer: {
    position: "absolute",
    top: -5,
    alignSelf: "center",
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 0.5,
    paddingHorizontal: 8,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
  topicText: {
    textAlign: "center",
  },
});
