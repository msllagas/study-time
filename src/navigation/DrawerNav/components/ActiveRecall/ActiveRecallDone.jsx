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
import { Button, Appbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Header from "../../../../components/Header";
import Ionicons from '@expo/vector-icons/Ionicons';
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig.js";
import { ScrollView } from "react-native-gesture-handler";


const ActiveRecallDone = ({navigation}) => {
  const _goBack = () => navigation.goBack();
  
    return (
      <ScrollView>
          <Header title={"Active Recall"} onPressBackArrow={_goBack}/>
          {/* {topicName} */}
          <Text style={styles.topicName}>Topic 1</Text>
          {/* {topicDate} */}
          <Text style={styles.subtitle}>June 1, 2023</Text>    

          {/* displayQnA */}
          <View style={styles.textContainer}>            
            {/* {questionNum} */}
            <Text style={styles.questionTitle}>Q1: This Question</Text> 

            {/* {userAnswer}, {answer} */}           
            <Text style={styles.answerContainer}>
              <Ionicons name="send" size={20} color={colors.green}/>
              Answer
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