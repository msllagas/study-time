import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { ActivityIndicator } from "react-native-paper";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../firebaseConfig";
import TopicCard from "./TopicCard";
import { colors } from "../utils/colors";

const Ongoing = ({ tag }) => {
  const [ongoingTopics, setOngoingTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDoneTopics = async () => {
      try {
        const currentUser = FIREBASE_AUTH.currentUser;
        const userId = currentUser.uid;

        let ongoingTopicsQuery;

        if (tag) {
          ongoingTopicsQuery = query(
            collection(FIRESTORE_DB, "topics"),
            where("userId", "==", userId),
            where("tag", "==", tag),
            where("isDone", "==", false),
            orderBy("createdAt", "desc")
          );
        } else {
          ongoingTopicsQuery = query(
            collection(FIRESTORE_DB, "topics"),
            where("userId", "==", userId),
            where("isDone", "==", false),
            orderBy("createdAt", "desc")
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
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator
            animating={true}
            color={colors.blueGreen}
            size="large"
            style={{ alignSelf: "center" }}
          />
        </View>
      ) : ongoingTopics.length > 0 ? (
        <FlatList
          data={ongoingTopics}
          renderItem={(topic) => (
            <TopicCard
              key={topic.id}
              tag={topic.item.tag}
              topic={topic.item.title}
              topicId={topic.item.id}
              isDone={false}
            />
          )}
          keyExtractor={(topic) => topic.id}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={{ justifyContent: "center" }}
          bounces={false}
        />
      ) : (
        <View style={styles.emptyText}>
          <Text variant="displaySmall" style={styles.text}>Empty</Text>
        </View>
      )}
    </View>
  );
};

export default Ongoing;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.white,
  },
  emptyText: {
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    fontFamily: "AmaticBold", 
    color:  colors.redOrange
  }
});
