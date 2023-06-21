import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { colors } from '../../utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Done from './components/Done';
import Ongoing from './components/Ongoing';


function StatusTabs() {
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator
        initialRouteName='Done'
        screenOptions={{
            activeTintColor: colors.violet,
            labelStyle: {fontSize: 14},
            style: {backgroundColor: 'white'}
        }}>
            <Tab.Screen
                name='Done'
                component={Done}
                options={{tabBarLabel:'Done'}}
            />
            <Tab.Screen
                name='On-going'
                component={Ongoing}
                options={{tabBarLabel:'On-going'}}
            />
        </Tab.Navigator>
    )
}

export default function TopBar(){
    return(
            <StatusTabs/>
    )
}