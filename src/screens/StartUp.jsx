import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { colors } from "../utils/colors";
import logo from "../../assets/imgs/logo3.png";
import bg from "../../assets/imgs/bg.png";

const StartUp = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} resizeMode="repeat" style={styles.image}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} resizeMode="contain"/> 
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
          onPress={() => navigation.navigate("Register")}
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
      </ImageBackground>
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
    alignSelf:'center',
    width:'90%',
    height:'50%',
  },
  logo:{
    flex:1,
    width:'100%',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 20,
    gap: 25,
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
    alignContent:"center",
    justifyContent:'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
