import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { colors } from "../utils/colors";

const StartUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo here</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("Login")}
          buttonColor={colors.blueGreen}
          textColor="white"
          labelStyle={styles.buttonLabel}
          contentStyle={{height: '100%'}}
          style={styles.button}
          uppercase
        >
          Log in
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => navigation.navigate("Login")}
          buttonColor={colors.blueGreen}
          textColor="white"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          contentStyle={{height: '100%'}}
          uppercase
        >
          Register
        </Button>
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
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
    justifyContent: "center",
  },
  button: {
    borderColor: "black",
    borderWidth: 3,
    height: 70,
  },
  buttonLabel: {
    color: colors.beige,
    fontSize: 20,
  },
});
