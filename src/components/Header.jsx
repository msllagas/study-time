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
import { Button, Appbar } from "react-native-paper";
import { colors } from "../utils/colors";

/* How to Use
Import first
<Header title='Pomodoro Method'/> 
*/

const Header = ({title}) =>{
    const _goBack = () => console.log('Back'); 
    return (
      <SafeAreaView>
        <Appbar.Header mode="center-aligned" style={styles.appbarHeader}>
          <Appbar.BackAction onPress={_goBack}/>
          <Appbar.Content title={title} color={colors.redOrange} titleStyle={styles.appbarTitle}/>          
        </Appbar.Header>
      </SafeAreaView>
    );
  };
  export default Header;

  const styles = StyleSheet.create({
    appbarHeader: {
      backgroundColor: colors.blueGreen2,
    },
    appbarTitle:{
      fontFamily: 'RockSalt',
      fontSize: 20,
    },
    tabTitle:{
      fontFamily: 'AmaticRegular'
    }
  });