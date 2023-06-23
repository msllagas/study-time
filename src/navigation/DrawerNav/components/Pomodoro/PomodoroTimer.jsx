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
 

  const PomodoroTimer = () => {
      return (
          <View>
            <Text>Text here</Text>
            <Pressable>
              <Text>timer here</Text>
            </Pressable>
          </View>
        );
  }
  
  export default PomodoroTimer