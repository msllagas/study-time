import React, { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../firebaseConfig";
import TopicCard from "../../../components/TopicCard";

const Done = () => {
  const [doneTopics, setDoneTopics] = useState([]);

  // useEffect(() => {
  //   const fetchDoneTopics = async () => {
  //     try {
  //       const doneTopicsQuery = query(
  //         collection(FIRESTORE_DB, "topics"),
  //         where("isDone", "==", true)
  //       );
  //       const doneTopicsSnapshot = await getDocs(doneTopicsQuery);
  //       const doneTopicsData = doneTopicsSnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setDoneTopics(doneTopicsData);
  //     } catch (error) {
  //       console.log("Error fetching done topics:", error);
  //     }
  //   };

  //   fetchDoneTopics();
  // }, [doneTopics]);

  {
    /* Logic for adding topic in firestore */
  }
  // const addTopicToFirestore = async () => {
  //   try {
  //     const topicData = {
  //       title: "Topic 5",
  //       description: "This is a new topic added to Firestore.",
  //       tag: "sq3r",
  //       isDone: true,
  //       technique: {
  //         date: new Date().toLocaleDateString("en-PH", {
  //           month: "2-digit",
  //           day: "2-digit",
  //           year: "numeric",
  //         }),
  //       },
  //       time: new Date().toLocaleTimeString("en-PH", {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       }),
  //     };
  //     await addDoc(collection(FIRESTORE_DB, "topics"), topicData);
  //   } catch (error) {
  //     console.error("Error adding topic:", error);
  //   }
  // };

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        marginTop: 15,
      }}
      showsVerticalScrollIndicator={false}
    >
      <TopicCard tag="pomodoro" topic="Test topic"/>
      {doneTopics.map((topic) => (
        <TopicCard key={topic.id} tag={topic.tag} topic={topic.title} />
      ))}
      {/* <Button icon="plus" mode="contained" onPress={addTopicToFirestore}>
        Add Topic
      </Button> */}
    </ScrollView>
  );
};

export default Done;

const styles = StyleSheet.create({
  label: {
    fontFamily: "AmaticRegular",
    fontSize: 40,
  },
});
