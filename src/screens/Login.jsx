import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { TextInput } from "react-native-paper";
import ButtonLink from "../components/ButtonLink";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signup successful:", userCredential.user);
        Alert.alert("Signup successful!");
      })
      .catch((error) => {
        console.log("Signup error:", error);
        Alert.alert("Signup error:", error.message);
      });
  };

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Main");
        setEmail(""); // Reset the email field to empty
        setPassword(""); // Reset the password field to empty
      })
      .catch((error) => {
        console.log("Login error:", error);
        Alert.alert("Login error:", error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo here</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          gap: 10,
          justifyContent: "center",
        }}
      >
        {/* <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
        /> */}
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon icon="account-outline" />}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          left={<TextInput.Icon icon="lock-outline" />}
        />
        <View style={{ flex: 1 }}>
          {/* <Button title="Create Account" onPress={signUp} /> */}
          <Button title="Sign In" onPress={signIn} />
          <View>
            <Text>Don't have an account yet?</Text>
            <ButtonLink
              onPress={() => navigation.navigate("Register")}
              title="Press"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  logoContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 10,
  },
});
