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
import TopBar from "../components/TopBar";

const ActiveRecall = () => {
    return (
        <SafeAreaView>
          <TopBar/>
        </SafeAreaView>
      );
}

export default ActiveRecall