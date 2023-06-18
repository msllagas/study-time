import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  BackHandler,
} from "react-native";
import React, { useState, useEffect } from "react";
import logo from "../../assets/imgs/logo3.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { TextInput, Button, Text } from "react-native-paper";
import ButtonLink from "../components/ButtonLink";
import { colors } from "../utils/colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    navigation.replace("StartUp");
    return true;
  };

  const signUp = async () => {
    if (password === "") {
      setIsPasswordEmpty(!isPasswordEmpty);
    }
    if (email === "") {
      setIsEmailEmpty(!isEmailEmpty);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
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
  const onEmailChange = (text) => {
    setEmail(text);
    setIsEmailEmpty(false);
  };
  const onEmailBlur = () => {
    setIsEmailEmpty(email === "");
  };
  const onPasswordChange = (text) => {
    setPassword(text);
    setIsPasswordEmpty(false);
  };
  const onPasswordBlur = () => {
    setIsPasswordEmpty(password === "");
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
          Sign in to Study Time!
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
            mode="contained-tonal"
            onPress={signUp}
            buttonColor={colors.blueGreen}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            contentStyle={{ height: "100%" }}
          >
            Sign Up
          </Button>
          <View style={styles.linkText}>
            <Text variant="labelLarge">Already have an account?</Text>
            <ButtonLink
              onPress={() => navigation.navigate("Login")}
              title="Click here to login"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7F7F7",
    padding: 8,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 20,
    height: 400,
    marginBottom: 20,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
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
