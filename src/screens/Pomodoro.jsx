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
import TopBar from "../components/TopBar";
import AddFAB from "../components/AddFAB";


const Pomodoro = () =>{
    return (
      <SafeAreaView>
      <TopBar/>
      <AddFAB/>
      </SafeAreaView>
    );
  };
  export default Pomodoro;

  const styles = StyleSheet.create({
    
  });