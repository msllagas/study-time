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
  import TopBar from "../../../TopTabNav/TopBar";
  import { colors } from "../../../../utils/colors";
  
  
  
  const Pomodoro = () => {
    const navigation = useNavigation();
      return (
          <View>
        
            <Text>Text here</Text>
            <Pressable onPress={()=>navigation.navigate("PomodoroDone")}>
              <Text>go to DONE</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate("PomodoroTimer")}>
              <Text>go to Timer</Text>
            </Pressable>
            <TopBar/>
           
          </View>
        );
  }
  
  export default Pomodoro