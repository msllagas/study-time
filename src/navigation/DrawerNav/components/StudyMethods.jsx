import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, PanResponder, Dimensions } from 'react-native';

import TopicCard from '../../../components/TopicCard';


const StudyMethods = () => {
  return (
    <View style={{flex: 1}}>
      <TopicCard tag="pomodoro" topic="Test 1"/>
    </View>
  )
}

export default StudyMethods;
