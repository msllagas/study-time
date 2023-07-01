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
import {
  TextInput,
  Button,
  Text,
  PaperProvider,
  Portal,
  Modal,
} from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import ButtonLink from "../components/ButtonLink";
import { colors } from "../utils/colors";
import { color } from "react-native-reanimated";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const hideModal = () => {
    navigation.navigate("Login");
    setVisible(false);
  };

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      showModal();
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
  const showModal = () => setVisible(true);

  return (
    <View
      style={{
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}
          >
            <View style={styles.modalView}>
              <Ionicons name="checkmark-circle" size={80} color="green" />
              <Text variant="headlineSmall" style={{ color: colors.green }}>
                Registration Successful!
              </Text>
              <Text
                variant="titleMedium"
                style={{ marginTop: 25, textAlign: "center" }}
              >
                Thank you for registering! Please Login to continue!
              </Text>
              <Button
                mode="contained-tonal"
                labelStyle={styles.buttonLabel}
                buttonColor="green"
                style={{ width: "80%", marginTop: 15, marginBottom: 10 }}
                onPress={hideModal}
              >
                OK
              </Button>
            </View>
          </Modal>
        </Portal>
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
            Sign up to Study Time!
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
              onPress={signUp}
              buttonColor={colors.lightGreen}
              style={[styles.button, { opacity: isLoading ? 0.5 : 1 }]}
              labelStyle={styles.buttonLabel}
              contentStyle={{ height: "100%" }}
              loading={isLoading}
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
      </PaperProvider>
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
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGreen,
    borderRadius: 20,
    height: 400,
    marginBottom: 20,
  },
  modalView: { 
    justifyContent: "center", 
    alignItems: "center" 
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
