import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../utils/colors';

const Done = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.label}>Donessd...</Text>
        </View>
      );
}

export default Done;

const styles = StyleSheet.create({
    label:{
      fontFamily:'AmaticRegular',
      fontSize:40,
    },
});