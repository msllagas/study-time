import { View, Text, StyleSheet, Dimensions, PanResponder, Animated } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { colors } from "../utils/colors";

const TopicCard = ({ tag, topic="Topic Here" }) => {

  const cardWidth = Dimensions.get('window').width * 0.9;
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
        <View style={[styles.card, { borderColor, width: cardWidth }]}>
          <Text style={styles.topicText}>{topic}</Text>
          <Ionicons name="trash-bin-outline" size={20} color="red" />
        </View>
      </View>
    </View>
  );
};

export default TopicCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    
    
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    position: "relative",
    flexDirection: "row",
    minHeight: 60,
  },
  cardContainer: {
    alignSelf: "center",
    marginVertical: 5,
  },
  textContainer: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    borderWidth: 0.5,
    paddingHorizontal: 8,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    fontWeight: 'bold'
  },
  topicText: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 16
  },
});
