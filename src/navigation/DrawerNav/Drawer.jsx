import React, { useEffect } from "react";
import { View, Text, BackHandler, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainPage from "../../screens/MainPage";
import TopBar from "../TopTabNav/TopBar";
import Pomodoro from "./components/Pomodoro";
import ActiveRecall from "./components/ActiveRecall";

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
      }}
    >
      <Drawer.Screen
        name="Main"
        component={TopBar}
        options={{
          headerTitle: "Study Time!",
          headerStyle: styles.headerTab,
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: "center",
          drawerLabel: "Home",
          drawerLabelStyle: styles.label,
        }}
      />
      <Drawer.Screen
        name="Pomodoro"
        component={Pomodoro}
        options={{
          headerTitle: "Pomodoro Method",
          headerStyle: styles.headerTab,
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: "center",
          drawerLabel: "Pomodoro Method (temp)",
          drawerLabelStyle: styles.label,
        }}
      />
      <Drawer.Screen
        name="ActiveRecall"
        component={ActiveRecall}
        options={{
          headerTitle: "Active Recall",
          headerStyle: styles.headerTab,
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: "center",
          drawerLabel: "Active Recall (temp)",
          drawerLabelStyle: styles.label,
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
    fontSize: 24,
  },
  label: {
    color: colors.white,
  },
});
