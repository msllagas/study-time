import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../../utils/colors";
import Done from "../../components/Done";
import Ongoing from "../../components/Ongoing";

const TopBar = ({ tag }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="On-going"
      screenOptions={{
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: "white" },
        tabBarIndicatorStyle: { backgroundColor: colors.redOrange },
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="On-going" options={{ tabBarLabel: "On-going" }}>
        {() => <Ongoing tag={tag} />}
      </Tab.Screen>
      <Tab.Screen name="Done" options={{ tabBarLabel: "Done" }}>
        {() => <Done tag={tag} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TopBar;
