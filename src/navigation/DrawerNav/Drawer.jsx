import React, { useEffect } from "react";
import { View, Text, BackHandler, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainPage from "../../screens/MainPage";
import TopBar from "../TopTabNav/TopBar";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import ActiveRecall from "./components/ActiveRecall/ActiveRecall";
import SpacedRepitition from "./components/SpacedRepitition/SpacedRepitition";
import StudyMethods from "./components/StudyMethods";
import SQ3R from "./components/SQ3R/SQ3R";
import PQ4R from "./components/PQ4R/PQ4R";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  // useEffect(() => {
  //   const handleExitApp = () => {
  //     BackHandler.exitApp(); // Exit the app when back button is pressed
  //     return true; // Prevent default back button behavior
  //   };

  //   // Add event listener for the back button
  //   BackHandler.addEventListener("hardwareBackPress", handleExitApp);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     BackHandler.removeEventListener("hardwareBackPress", handleExitApp);
  //   };
  // }, []);
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Main"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.blueGreen,
        },
        headerStyle: styles.headerTab,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: "center",
        drawerLabelStyle: styles.label,
      }}
    >
      <Drawer.Screen
        name="Main"
        component={TopBar}
        options={{
          headerTitle: "Study Time!",
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="Pomoodoro"
        component={Pomodoro}
        options={{
          headerTitle: "Pomodoro Method",
          drawerLabel: "Pomodoro (temp)",
        }}
      />
      <Drawer.Screen
        name="ActiveRecall"
        component={ActiveRecall}
        options={{
          headerTitle: "Active Recall",
          drawerLabel: "Active Recall (temp)",
        }}
      />
      <Drawer.Screen
        name="SpacedRepitition"
        component={SpacedRepitition}
        options={{
          headerTitle: "SpacedRepitition",
          drawerLabel: "SpacedRepitition (temp)",
        }}
      />

      <Drawer.Screen
        name="SQ3R"
        component={SQ3R}
        options={{
          headerTitle: "SQ3R",
          drawerLabel: "SQ3R (temp)",
        }}
      />

      <Drawer.Screen
        name="PQ4R"
        component={PQ4R}
        options={{
          headerTitle: "PQ4R",
          drawerLabel: "PQ4R (temp)",
        }}
      />

      <Drawer.Screen
        name="Study Methods"
        component={StudyMethods}
        options={{
          headerTitle: "Study Methods",
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  headerTab: {
    backgroundColor: colors.blueGreen2,
  },
  headerTitle: {
    fontFamily: "RockSalt",
    color: colors.redOrange,
  },
  label: {
    color: colors.white,
  },
});
