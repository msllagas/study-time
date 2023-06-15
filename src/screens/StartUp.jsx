import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";

const StartUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo here</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button title="Signup" />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 20,
    gap: 5,
  },
});
