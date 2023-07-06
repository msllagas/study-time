import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Button,
  Appbar,
  IconButton,
  TextInput,
  Modal,
  Portal,
  Text,
  Card,
  PaperProvider,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Constants from "expo-constants";
import { color } from "react-native-reanimated";
import logo from "../../../../../assets/imgs/logo3.png";
import ErrorModal from "../../../../components/ErrorModal";
import { useAppContext } from "../../../../context/AppContext";

const SpacedRepititionAdd = ({ navigation }) => {
  const { topicName, setTopicName, numSessions, setNumSessions } =
    useAppContext();

  const [visible, setVisible] = React.useState(false);
  const _goBack = () => navigation.goBack();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <ScrollView style={{ paddingBottom: 20 }}>
        <PaperProvider>
          <IconButton
            icon="arrow-left"
            style={styles.backButton}
            size={40}
            onPress={_goBack}
          />

          <View style={styles.logoContainer}>
            <Image
              style={{ width: 500, height: 200 }}
              source={logo}
              resizeMode="contain"
            />
          </View>

          <Text
            style={{
              fontFamily: "FuzzyBubblesBold",
              fontSize: 18,
              textAlign: "center",
              color: "black",
            }}
          >
            Study with Spaced Repitition Technique
          </Text>

          <Text
            style={{
              fontFamily: "AmaticBold",
              fontSize: 48,
              textAlign: "center",
              color: colors.beige,
              marginTop: 20,
            }}
          >
            Topic Name
          </Text>

          <TextInput
            label="Topic"
            value={topicName}
            onChangeText={(topicName) => setTopicName(topicName)}
            style={{
              width: "70%",
              alignSelf: "center",
              marginBottom: 30,
              backgroundColor: colors.lighterYellow,
              color: "black",
            }}
            underlineColor={colors.lighterYellow}
            activeUnderlineColor={colors.beige}
          />

          <Text
            style={{
              fontFamily: "AmaticBold",
              fontSize: 48,
              textAlign: "center",
              color: colors.beige,
              marginTop: 20,
            }}
          >
            Number of Sessions
          </Text>

          <TextInput
            value={numSessions}
            onChangeText={(numSessions) => setNumSessions(numSessions)}
            style={styles.setupInput}
            mode="outlined"
            outlineColor={colors.lighterYellow}
            activeOutlineColor={colors.beige}
          />

          <Button
            mode="contained"
            onPress={
              topicName !== "" && numSessions > 2 && !isNaN(Number(numSessions))
                ? () => navigation.navigate("SpacedRepititionDateStart")
                : () => showModal()
            }
            style={{
              borderRadius: 8,
              width: "70%",
              alignSelf: "center",
              marginVertical: 30,
              backgroundColor: colors.beige,
            }}
          >
            Set-up Schedule
          </Button>

          <ErrorModal visible={visible} hideModal={hideModal} />
        </PaperProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    height: "100%",
    backgroundColor: colors.white,
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,

    marginHorizontal: 20,
    zIndex: -50,

    marginHorizontal: 20,
  },
  imageContainer: {
    alignSelf: "center",
    width: "50px",
    marginTop: 20,
  },
  setupContainer: {
    width: "70%",
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  largeText: {
    fontFamily: "AmaticBold",
    fontSize: 32,
    color: colors.beige,
  },
  smallText: {
    fontFamily: "AmaticRegular",
    fontSize: 16,
    color: colors.beige,
  },
  setupInput: {
    width: "30%",
    alignSelf: "center",
    backgroundColor: colors.lighterYellow,
    textAlign: "center",
    color: "black",
  },
});

export default SpacedRepititionAdd;
