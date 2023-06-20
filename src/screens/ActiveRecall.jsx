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
import { colors } from "../utils/colors";
import Header from "../components/Header";

const ActiveRecall = () => {
    return (
        <SafeAreaView>
          <Header title='Active Recall'/>
        </SafeAreaView>
      );
}

export default ActiveRecall