import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { colors } from '../utils/colors';

const AddFAB = () => (
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
    theme={{ colors: { 
        primaryContainer: colors.grayBlue, 
        onPrimaryContainer: colors.blueGreen } }}
    rippleColor={colors.blueGreen2}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: 450,
    borderRadius:30,
    
  },
})

export default AddFAB;