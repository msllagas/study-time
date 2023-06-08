import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";

const StartUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo here</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" style={styles.nyaw} />
        <Button title="Signup" style={styles.buttons} />
      </View>
    </SafeAreaView>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "whitesmoke",
  },
  logoContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10
  },
  nyaw: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10
  }
});
