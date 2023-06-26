import {ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import TopicCard from "./TopicCard";

const Done = ({ tag}) => {
  const [doneTopics, setDoneTopics] = useState([]);

  useEffect(() => {
    const fetchDoneTopics = async () => {
      try {
        let doneTopicsQuery;
  
        if (tag) {
          doneTopicsQuery = query(
            collection(FIRESTORE_DB, "topics"),
            where("tag", "==", tag),
            where("isDone", "==", true)
          );
        } else {
          doneTopicsQuery = query(
            collection(FIRESTORE_DB, "topics"),
            where("isDone", "==", true)
          );
        }
  
        const doneTopicsSnapshot = await getDocs(doneTopicsQuery);
        const doneTopicsData = doneTopicsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoneTopics(doneTopicsData);
      } catch (error) {
        console.log("Error fetching done topics:", error);
      }
    };
  
    fetchDoneTopics();
  }, [tag, doneTopics]);
  
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        marginTop: 15,
        paddingBottom: 50,
      }}
    >
      {doneTopics.map((topic) => (
        <TopicCard key={topic.id} tag={topic.tag} topic={topic.title} />
      ))}
    </ScrollView>
  );
};

export default Done;
