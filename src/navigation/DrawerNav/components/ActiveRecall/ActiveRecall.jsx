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

const ActiveRecall = ({navigation}) => {
  return (
    <View>
      {/* <AddButton
      onPress={()=>navigation.navigate("ActiveRecall")} /> */}
    </View>
  );
};

export default ActiveRecall;
