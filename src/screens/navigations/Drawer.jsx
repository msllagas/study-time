import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainPage from "../MainPage";
import TopBar from "../../components/TopBar";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  useEffect(() => {
    const handleExitApp = () => {
      BackHandler.exitApp(); // Exit the app when back button is pressed
      return true; // Prevent default back button behavior
    };

    // Add event listener for the back button
    BackHandler.addEventListener("hardwareBackPress", handleExitApp);

    // Cleanup the event listener on component unmount
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleExitApp);
    };
  }, []);
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={TopBar}
        options={{ headerTitle: "Study Time!" }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;
