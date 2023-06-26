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
import React from "react";
import { Button, Appbar } from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";

const ActiveRecall = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate("ActiveRecallDone")}>
        <Text>go to DONE</Text>
      </Pressable>
      <AddButton
      onPressAdd={()=>navigation.navigate("ActiveRecallAdd")} />      
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor:colors.white,
  },
})

export default ActiveRecall;
