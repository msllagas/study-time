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
  
  
  
  const PomodoroDone = ({navigation}) => {
    const _goBack = () => navigation.goBack();
      return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress= {_goBack} />
                <Appbar.Content title="Pomodoro Method" />
            </Appbar.Header>

            <Text style={styles.topicName}>Topic 1</Text>
            <Text style={styles.subtitle}>June 1, 2023</Text>
            <Text style={styles.setTitle}>Set 1</Text>
            <Text style={styles.sessionTitle}>Session 1:</Text>

           
          </View>
        );
  }
  
  export default PomodoroDone

  const styles=StyleSheet.create({
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
        fontSize: 16
    },
    breakNote: {
        fontFamily: 'AlumniSansRegular',
        fontSize: 24,
        textAlign: 'center'
    },
  })