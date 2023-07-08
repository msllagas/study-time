import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, Appbar, IconButton, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Header from "../../../../components/Header";
import Ionicons from '@expo/vector-icons/Ionicons';
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig.js";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ActiveRecallDone = ({navigation}) => {
  const _goBack = () => navigation.navigate("ActiveRecall");
  const [theQuestion, setTheQuestion] = useState("");
  const [theAnswer, setTheAnswer] = useState("");
  const [QnAnum, setQnAnum] = useState(0);
  const [topicTitle, setTopicTitle]  = useState("");
  const [theTimeStamp, setTimeStamp] = useState("");

  class qnaData {
    constructor (num, question, answer ) {
        this.num = num;
        this.question = question;
        this.answer = answer;  
        
        setTheAnswer(answer);
        setTheQuestion(question);
        setQnAnum(num);
    }
    toString() {
        return this.num + ', ' + this.question + ', ' + this.answer;
    }    
  };
  const qnaConverter = {
    toFirestore: (qna) => {
        return {
            num: qna.num,
            question: qna.question,
            answer: qna.answer
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new qnaData(data.num, data.question, data.answer);
    }
  };

  class topicData {
    constructor (title, createdAt) {
        this.title = title;
        this.createdAt = createdAt;
        
        setTopicTitle(title);
        setTimeStamp(createdAt);
    }
    toString() {
        return this.topicTitle + ', ' + this.theTimeStamp;
    }    
  };
  const topicConverter = {
    toFirestore: (topic) => {
      return{
        title: topic.title,
        createdAt: topic.createdAt,
      }
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new topicData(data.title, data.createdAt);
    }
  };

  // React.useEffect(() => {
  //   const fetchQnAs = async() => {
  //     const lastTopicId = await AsyncStorage.getItem('my-key');
  //     const lastQnAId = await AsyncStorage.getItem('qnaId');
  //     try {
  //       const currentUser = FIREBASE_AUTH.currentUser;
  //       if (!currentUser) {
  //         console.log("error");
  //       }else{
  //         const ref = doc(FIRESTORE_DB, "topics", lastTopicId, "qna", lastQnAId).withConverter(qnaConverter);
  //         const docSnap = await getDoc(ref);
  //         if (docSnap.exists()) {
  //           // Convert to City object
  //           const qnaInfo = docSnap.data();
  //           // Use a City instance method
  //           console.log(qnaInfo.toString());
  //         } else {console.log("No such document!");}

  //         const topicRef = doc(FIRESTORE_DB, "topics", lastTopicId).withConverter(topicConverter);
  //         const topicSnap = await getDoc(topicRef);
  //         if (topicSnap.exists()) {
  //           // Convert to City object
  //           const topicInfo = topicSnap.data();
  //           // Use a City instance method
  //           console.log(topicInfo.toString());
  //         } else {console.log("No such document!");}
  //       }
  //     } catch (error) {
  //       console.log("ERROR: ", error)
  //     }
  //   }
  //   fetchQnAs();
  // })
  
    return (
      <ScrollView>
          <Header title={"Active Recall"} onPressBackArrow={_goBack}/>
          {/* {topicName} */}
          <Text style={styles.topicName}>Topic 1</Text>
          {/* {topicDate} */}
          <Text style={styles.subtitle}>January 1, 2023</Text>    

          {/* displayQnA */}
          <View style={styles.textContainer}>            
            {/* {questionNum} */}
            <Text style={styles.questionTitle}>Question 1</Text> 
            <Text style={styles.answerContainer} >Who took the cookie form the cookie jar?</Text>
            {/* {userAnswer}, {answer} */}           
            <Text style={styles.answerContainer}>
              <Ionicons name="send" size={20} color={colors.green}/>
              Me
            </Text>
          </View>

          {/* if questionNum == userQuestionNum {display image} */}
          <Image style={styles.imageContainer} source={require('../../../../../assets/imgs/done-badge.png')} />
        </ScrollView>
      );
}

export default ActiveRecallDone

const styles=StyleSheet.create({
  appbarHeader:{
    backgroundColor:colors.grayBlue, 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  appbarTitle:{
    fontFamily:'RockSalt',
    paddingVertical: 10,
    textAlignVertical:'center'
  },
  textContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
  },
  topicName: {
      fontFamily:'AmaticBold',
      fontSize: 64,
      color: colors.green,
      textAlign: 'center'
  },
  subtitle: {
      fontFamily: 'FuzzyBubblesBold',
      fontSize: 18,
      textAlign: 'center'
  },
  questionTitle: {
      fontFamily: 'AlumniSansRegular',
      fontSize: 32
  },
  answerContainer: {
      fontFamily: 'FuzzyBubblesRegular',
      fontSize: 20,
      textAlignVertical:'center', 
      marginLeft: 5,       
  },
  imageContainer: {
    alignSelf: 'center',
    marginVertical: 80,
  }
})