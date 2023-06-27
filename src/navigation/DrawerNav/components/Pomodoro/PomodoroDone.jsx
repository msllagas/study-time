import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet,
    Pressable,
    Image,
    ScrollView
  } from "react-native";
import React from 'react';
import { Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Header from "../../../../components/Header";

//connect to firebase, read pomodoro 1 done topic
//displayHistory
  const PomodoroDone = ({navigation}) => {
    const _goBack = () => navigation.goBack();
      return (
      <ScrollView>
        <View>
            <Header title="Pomodoro" onPressBackArrow={_goBack}/>
            {/* {topicName} */}
            <Text style={styles.topicName}>Topic 1</Text>
            {/* {topicDate} */}
            <Text style={styles.subtitle}>June 1, 2023</Text>

            {/* displayHistory */}
            <View style={styles.textContainer}>
              {/* {setNum}  */}
              <Text style={styles.setTitle}>Set 1</Text>
              {/* {sessionNum} */}
              <Text style={styles.sessionTitle}>Session 1:
              {/* {sessionTime} */}
              <Text style={styles.timeStamp}>  5:00pm - 5:15pm</Text>
              </Text>
              {/* if setNum == userSetNum <Text>--BREAK TIME--</Text>
                  else <Text>--SHORT TIME--</Text>*/}
              <Text style={styles.breakNote}>--SHORT BREAK--</Text>
              {/* if setNum == userSetNum && sessionNum == userSetSession {display image} */}
            </View>
            
            <Image style={styles.imageContainer} source={require('../../../../../assets/imgs/done-badge.png')} />
           
          </View>
        </ScrollView>
        );
  }
  
  export default PomodoroDone

  const styles=StyleSheet.create({
    textContainer: {
      width: '70%',
      alignSelf: 'center'
    },
    topicName: {
        fontFamily:'AmaticBold',
        fontSize: 64,
        color: colors.purple,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: 'FuzzyBubblesBold',
        fontSize: 18,
        textAlign: 'center'
    },
    setTitle: {
        fontFamily: 'Inter',
        fontSize: 24,
        marginTop: 30
    },
    sessionTitle: {
        fontFamily: 'AlumniSansRegular',
        fontSize: 32
    },
    timeStamp: {
        fontFamily: 'FuzzyBubblesRegular',
        fontSize: 16,
        textAlignVertical:'center'
    },
    breakNote: {
        fontFamily: 'AlumniSansRegular',
        fontSize: 24,
        textAlign: 'center'
    },
    imageContainer: {
      alignSelf: 'center',
      marginVertical: 80,
    }
  })