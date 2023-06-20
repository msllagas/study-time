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
import { NavigationContainer } from "@react-navigation/native";
import { Button} from "react-native-paper";
import { colors } from "../utils/colors";
import Header from "../components/Header";



const Pomodoro = () =>{
    return (
      <SafeAreaView>
      <Header
      title='Pomodoro Method'/>
   
      </SafeAreaView>
    );
  };
  export default Pomodoro;

  const styles = StyleSheet.create({
    
  });