import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Chip } from "react-native-paper";
import React from "react";

const TopicCard = () => {
  return (
    <View style={styles.container}>
         <Text style={styles.textContainer}>
            <Text style={styles.text}>Pomodoro Technique</Text>
          </Text>
      <View style={styles.cardContainer}>
        <View
          style={{
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            position: "relative",
            flexDirection: 'row'
          }}
        >
         
          <Text style={styles.topicText}>Topic Here</Text>
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
        marginVertical: 20
      },
      cardContainer: {
        width: windowWidth * 0.8,
        alignSelf: "center",
        marginVertical: 5,
      },
      textContainer: {
        position: "absolute",
        top: -5,
        alignSelf: "center",
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: .5,
        paddingHorizontal: 8,
        borderRadius: 20,
        zIndex: 100
      },
      text: {
        fontSize: 12,
        textAlign: "center",
        color: 'white'
      },
      topicText: {
        textAlign: "center",
      },
});
