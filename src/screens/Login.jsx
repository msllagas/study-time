import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React, { useState } from "react";
import logo from "../../assets/imgs/logo3.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { TextInput, Button, Text } from "react-native-paper";
import ButtonLink from "../components/ButtonLink";
import { colors } from "../utils/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

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
    setIsLoading(true);
    if (password === "") {
      setIsPasswordEmpty(!isPasswordEmpty);
    }
    if (email === "") {
      setIsEmailEmpty(!isEmailEmpty);
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation.navigate("Drawer");
      setEmail("");
      setPassword("");
      setIsEmailEmpty(false);
      setIsPasswordEmpty(false);
    } catch (error) {
      setIsEmailEmpty(true);
      setIsPasswordEmpty(true);
    }

    setIsLoading(false);
  };
  return (
    <View
      style={{
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor="whitesmoke" translucent />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
        </View>
        <Text
          variant="headlineSmall"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Login in Your Account
        </Text>
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
            mode="elevated"
            onPress={signIn}
            buttonColor="dodgerblue"
            style={[styles.button, { opacity: isLoading ? 0.5 : 1 }]}
            labelStyle={styles.buttonLabel}
            contentStyle={{ height: "100%" }}
            loading={isLoading}
          >
            Login
          </Button>
          <View style={styles.linkText}>
            <Text variant="labelLarge">Don't have an account yet?</Text>
            <ButtonLink
              onPress={() => navigation.navigate("Register")}
              title="Click here to sign up"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7F7F7",
    padding: 8,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    height: 400,
    marginBottom: 20,
  },
  button: {
    // borderColor: "black",
    // borderWidth: 1,
    height: 50,
    // borderRadius: 10
  },
  buttonContainer: {
    paddingHorizontal: 20,
    gap: 20,
    marginTop: 10,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
    marginVertical: 20,
    gap: 10,
  },
  linkText: {
    alignItems: "center",
    gap: 5,
  },
});
