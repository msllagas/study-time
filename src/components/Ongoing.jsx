import { ScrollView, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ActivityIndicator } from "react-native-paper";
import { FIRESTORE_DB } from "../../firebaseConfig";
import TopicCard from "./TopicCard";
import { colors } from "../utils/colors";

const Ongoing = ({ tag }) => {
  const [ongoingTopics, setOngoingTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDoneTopics = async () => {
      try {
        let ongoingTopicsQuery;

        if (tag) {
          ongoingTopicsQuery = query(
            collection(FIRESTORE_DB, "topics"),
            where("tag", "==", tag),
            where("isDone", "==", false)
          );
        } else {
          ongoingTopicsQuery = query(
            collection(FIRESTORE_DB, "topics"),
            where("isDone", "==", false)
          );
        }

        const doneTopicsSnapshot = await getDocs(ongoingTopicsQuery);
        const doneTopicsData = doneTopicsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIsLoading(false);
        setOngoingTopics(doneTopicsData);
      } catch (error) {
        console.log("Error fetching done topics:", error);
      }
    };

    fetchDoneTopics();
  }, [tag, ongoingTopics]);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View
          style={styles.indicatorContainer}
        >
          <ActivityIndicator
            animating={true}
            color={colors.blueGreen}
            size="large"
          />
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {ongoingTopics.map((topic) => (
          <TopicCard key={topic.id} tag={topic.tag} topic={topic.title} />
        ))}
        {/* <TopicCard tag="pomodoro" topic="Sample Topic 1"/>
        <TopicCard tag="active recall" topic="Sample Topic 2"/>
        <TopicCard tag="spaced repetition" topic="Sample Topic 3"/>
        <TopicCard tag="pq4r" topic="Sample Topic 3"/>
        <TopicCard tag="sq3r" topic="Sample Topic 3"/> */}
      </ScrollView>
    </View>
  );
};

export default Ongoing;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  indicatorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    justifyContent: "center",
    marginTop: 15,
    paddingBottom: 50,
  }
});
