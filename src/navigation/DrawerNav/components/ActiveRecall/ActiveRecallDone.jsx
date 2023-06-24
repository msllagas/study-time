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
  
  
  
  const ActiveRecallDone = ({navigation}) => {
    const _goBack = () => navigation.goBack();
      return (
        <View>
            <Appbar.Header style={styles.appbarHeader} mode="center-aligned">
                <Appbar.BackAction onPress= {_goBack}/>
                <Appbar.Content title="Active Recall" titleStyle={styles.appbarTitle}/>
            </Appbar.Header>
            {/* {topicName} */}
            <Text style={styles.topicName}>Topic 1</Text>
            {/* {topicDate} */}
            <Text style={styles.subtitle}>June 1, 2023</Text>
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
      fontSize: 16,
      paddingVertical: 10,
      textAlignVertical:'center'
    },
    textContainer: {
      width: '70%',
      alignSelf: 'center'
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