import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import TopBar from "../navigation/TopTabNav/TopBar";
import Done from "../components/Done";
import Ongoing from "../components/Ongoing";

const MainPage = () => {
  return <TopBar Done={Done} Ongoing={Ongoing}/>;
};

export default MainPage;
