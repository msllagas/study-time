import React, {useState, useEffect} from "react";
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
  getDocs
} from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../firebaseConfig";
import TopicCard from "../../../components/TopicCard";


const Done = () => {
  const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   const fetchTopics = async () => {
  //     try {
  //       const topicsQuery = query(collection(FIRESTORE_DB, 'topics'));
  //       const topicsSnapshot = await getDocs(topicsQuery);
  //       const topicsData = topicsSnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setTopics(topicsData);
  //     } catch (error) {
  //       console.log('Error fetching topics:', error);
  //     }
  //   };

  //   fetchTopics();
  // }, [topics]);

  // {/* Logic for adding topic in firestore */}
  // const addTopicToFirestore = async () => {
  //   try {
  //     const topicData = {
  //       title: 'New Topic',
  //       description: 'This is a new topic added to Firestore.',
  //       tag: 'pomodoro',
  //       technique: {
  //         date: new Date().toLocaleDateString('en-PH',{
  //           month: '2-digit',
  //           day: '2-digit',
  //           year: 'numeric',
  //         })},
  //         time: new Date().toLocaleTimeString('en-PH', {
  //           hour: '2-digit',
  //           minute: '2-digit',
  //         }),
  //     };
  //     await addDoc(collection(FIRESTORE_DB, 'topics'), topicData)
  //   } catch (error) {
  //     console.error('Error adding topic:', error);
  //   }
  // };

  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", alignItems: "center", }} showsVerticalScrollIndicator={false}>
      <TopicCard/>
      
      <Button
        icon="plus"
        mode="contained"
        // onPress={addTopicToFirestore}
      >
        Add Topic
      </Button>
      <View>
      {/* {topics.map((topic) => (
        
        <View key={topic.id} style={styles.card}>
          <Text>{topic.title}</Text>
          <Text>{topic.description}</Text>
          
        </View>
      ))} */}
      </View>
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
