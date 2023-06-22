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
  
  
  
  const PomodoroAdd = ({navigation}) => {
      return (
          <View>
        
            <Text>Text here</Text>
            <Pressable onPress={onPressFunc}>
              <Text>Home Button</Text>
            </Pressable>
           
          </View>
        );
  }
  
  export default PomodoroAdd;