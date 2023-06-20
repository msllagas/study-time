import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ongoing = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.label}>Still Studying...</Text>
        </View>
      );
}

export default Ongoing;

const styles = StyleSheet.create({
  label:{
    fontFamily:'AmaticRegular',
    fontSize:40,
  },
});