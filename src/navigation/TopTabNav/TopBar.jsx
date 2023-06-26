import * as React from "react";
import { colors } from "../../utils/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopBar = ({ Done, Ongoing, tag }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Done"
      screenOptions={{
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: "white" },
        tabBarIndicatorStyle:{ backgroundColor:colors.redOrange },
      }}
    >
      <Tab.Screen name="Done" options={{ tabBarLabel: "Done" }}>
        {() => <Done tag={tag} />}
      </Tab.Screen>
      <Tab.Screen name="On-going" options={{ tabBarLabel: "On-going" }}>
        {() => <Ongoing tag={tag} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TopBar;

// function StatusTabs() {
//     const Tab = createMaterialTopTabNavigator();
//     return(
//         <Tab.Navigator
//         initialRouteName='Done'
//         screenOptions={{
//             activeTintColor: colors.violet,
//             labelStyle: {fontSize: 14},
//             style: {backgroundColor: 'white'}
//         }}>
//             <Tab.Screen
//                 name='Done'
//                 component={Done}
//                 options={{tabBarLabel:'Done'}}
//             />
//             <Tab.Screen
//                 name='On-going'
//                 component={Ongoing}
//                 options={{tabBarLabel:'On-going'}}
//             />
//         </Tab.Navigator>
//     )
// }

// export default function TopBar(){
//     return(
//             <StatusTabs/>
//     )
// }
