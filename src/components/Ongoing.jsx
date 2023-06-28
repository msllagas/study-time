import { ScrollView, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FIRESTORE_DB } from "../../firebaseConfig";
import TopicCard from "./TopicCard";

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
            color={MD2Colors.red800}
            size="large"
          />
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollView}
      >
        {ongoingTopics.map((topic) => (
          <TopicCard key={topic.id} tag={topic.tag} topic={topic.title} />
        ))}
        {/* <TopicCard tag="pomodoro" topic="Sample awdawdawda wd awd awd awda daw dawd awdawdawdawd awdawd awd awd awd awd "/> */}
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
