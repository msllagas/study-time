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
import React from 'react';
import { Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Header from "../../../../components/Header";
  
  
  
  const ActiveRecallDone = ({navigation}) => {
    const _goBack = () => navigation.goBack();
      return (
        <View>
            <Header title={"Active Recall"} onPressBackArrow={_goBack}/>
            {/* {topicName} */}
            <Text style={styles.topicName}>Topic 1</Text>
            {/* {topicDate} */}
            <Text style={styles.subtitle}>June 1, 2023</Text>    

            <View style={styles.textContainer}>            
            {/* {questionNum} */}
            <Text style={styles.questionTitle}>Q1:
            <Text style={styles.answer}>  correct</Text>
            </Text>            
            {/* if questionNum == userQuestionNum {display image} */}
            <Image style={styles.imageContainer} source={require('../../../../../assets/imgs/done-badge.png')} />
            </View>
           
          </View>
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
    answer: {
        fontFamily: 'FuzzyBubblesRegular',
        fontSize: 20,
        textAlignVertical:'center'
    },
    imageContainer: {
      alignSelf: 'center',
      marginVertical: 80,
    }
  })