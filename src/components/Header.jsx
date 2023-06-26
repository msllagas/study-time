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

const Header = ({title, onPressBackArrow}) =>{ 
    return (
      <SafeAreaView>       
        <Appbar.Header style={styles.appbarHeader} mode="center-aligned">
          <Appbar.BackAction onPress= {onPressBackArrow} color={colors.redOrange}/>
          <Appbar.Content title={title} color={colors.redOrange} titleStyle={styles.appbarTitle}/>
        </Appbar.Header>
      </SafeAreaView>
    );
  };
  export default Header;

  const styles = StyleSheet.create({
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
  });