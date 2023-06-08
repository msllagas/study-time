import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from "../../firebaseConfig"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signUp = async () => {
    
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signup successful:', userCredential.user);
        Alert.alert('Signup successful!');
      })
      .catch((error) => {
        console.log('Signup error:', error);
        Alert.alert('Signup error:', error.message);
      });
  };

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('My Todos');
        setEmail(""); // Reset the email field to empty
        setPassword(""); // Reset the password field to empty
      })
      .catch((error) => {
        console.log('Login error:', error);
        Alert.alert('Login error:', error.message);
      });   
  };
  return (
    <View style={styles.container}>
        
      <TextInput
        placeholder="Email"
        onChangeText={() => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        onChangeText={() => setPassword(text)}
        value={password}
        style={styles.input}
      />
      <Button title="Create Account" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'column',
    paddingVertical: 20,
  },
  input: {
    marginVertical:4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
  },
  todoText: {
    flex: 1,
    paddingHorizontal: 4,
  },
  todo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});