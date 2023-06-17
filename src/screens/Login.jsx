import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
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
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

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
  const onEmailChange = (text) => {
    setEmail(text);
    setIsEmailEmpty(false);
  };
  const onEmailBlur = () => {
    setIsEmailEmpty(email === "");
  };
  const onPasswordChange = (text) => {
    setPassword(text);
    setIsPasswordEmpty(false); // Clear password error when user inputs text
  };
  const onPasswordBlur = () => {
    setIsPasswordEmpty(password === ""); // Set password error when user leaves the field if it's empty
  };
  const signIn = async () => {
    if (password === "") {
      setIsPasswordEmpty(!isPasswordEmpty);
    }
    if (email === "") {
      setIsEmailEmpty(!isEmailEmpty);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation.navigate("Main");
      setEmail("");
      setPassword("");
      setIsEmailEmpty(false);
      setIsPasswordEmpty(false);
    } catch (error) {
      setIsEmailEmpty(true);
      setIsPasswordEmpty(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo here</Text>
      </View>
      <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome Back</Text>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={onEmailChange}
          onBlur={onEmailBlur}
          left={<TextInput.Icon icon="account-outline" />}
          error={isEmailEmpty}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={onPasswordChange}
          onBlur={onPasswordBlur}
          secureTextEntry
          left={<TextInput.Icon icon="lock-outline" />}
          right={<TextInput.Icon icon="eye-outline" />}
          error={isPasswordEmpty}
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
