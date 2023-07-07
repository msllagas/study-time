import React, { useEffect } from "react";
import { View, Text, BackHandler, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import MainPage from "../../screens/MainPage";
import TopBar from "../TopTabNav/TopBar";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import ActiveRecall from "./components/ActiveRecall/ActiveRecall";
import SpacedRepitition from "./components/SpacedRepitition/SpacedRepitition";
import StudyMethods from "./components/StudyMethods";

import SQ3R from "./components/SQ3R/SQ3R";
import PQ4R from "./components/PQ4R/PQ4R";

import Logo from "../../components/Logo";
import { Button } from "react-native-paper";

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  const auth = getAuth();
  const navigation = useNavigation();
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
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (err) {
      console.log("Sign out error:", err);
    }
  };

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Logo style={{ alignSelf: "center", marginVertical: 20 }} />
        <DrawerItemList {...props} />
        <Button
          mode="elevated"
          style={{ borderRadius: 5, marginHorizontal: 5 }}
          onPress={handleSignOut}
        >
          Sign out
        </Button>
      </DrawerContentScrollView>
    );
  }

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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainPage}
        options={{
          headerTitle: "Study Time!",
          drawerLabel: "Home",
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
