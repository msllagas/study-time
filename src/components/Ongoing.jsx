import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import TopicCard from "./TopicCard";

const Ongoing = ({tag}) => {
  const [ongoingTopics, setOngoingTopics] = useState([]);

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
        setOngoingTopics(doneTopicsData);
      } catch (error) {
        console.log("Error fetching done topics:", error);
      }
    };

    fetchDoneTopics();
  }, [tag, ongoingTopics]);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        marginTop: 15,
        paddingBottom: 50,
      }}
    >
      {ongoingTopics.map((topic) => (
        <TopicCard key={topic.id} tag={topic.tag} topic={topic.title} />
      ))}
    </ScrollView>
  );
};

export default Ongoing;
