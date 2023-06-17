import {
  View,
  Text,
  StyleSheet,
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
import { TextInput, Button } from "react-native-paper";
import ButtonLink from "../components/ButtonLink";
import { colors } from "../utils/colors";

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
      <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome Back</Text>
      <View
        style={styles.inputContainer}
      >
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
          right={<TextInput.Icon icon="eye-outline" />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained-tonal"
          onPress={signIn}
          buttonColor={colors.blueGreen}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          contentStyle={{ height: "100%" }}
        >
          Login
        </Button>
        <View style={styles.linkText}>
          <Text>Don't have an account yet?</Text>
          <ButtonLink
            onPress={() => navigation.navigate("Register")}
            title="Click here to sign in"
          />
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
    flex: 1.75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    // borderRadius: 10
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 20,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    justifyContent: "center",
  },
  linkText: {
    alignItems: "center",
    gap: 5,
  },
});
