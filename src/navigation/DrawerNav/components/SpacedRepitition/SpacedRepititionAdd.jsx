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
  PaperProvider,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Constants from "expo-constants";
import { color } from "react-native-reanimated";

const SpacedRepititionAdd = ({ navigation }) => {
  const [topicName, setTopicName] = React.useState("");
  const [startTime, setStartTime] = React.useState("0");

  const [visible, setVisible] = React.useState(false);
  const _goBack = () => navigation.goBack();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    alignSelf: "center",
    borderRadius: 8,
  };
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

          <IconButton
            icon="help-circle-outline"
            iconColor={colors.redOrange}
            size={25}
            style={{ position: "absolute", top: 20, right: 0 }}
            onPress={showModal}
          />

          <Image
            style={styles.imageContainer}
            source={require("../../../../../assets/imgs/logo2.png")}
            resizeMode="contain"
          />

          <Text
            style={{
              fontFamily: "FuzzyBubblesBold",
              fontSize: 18,
              textAlign: "center",
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
            Session Interval
          </Text>

          <TextInput
            value={startTime}
            onChangeText={(startTime) => setStartTime(startTime)}
            style={styles.setupInput}
            mode="outlined"
            outlineColor={colors.lighterYellow}
            activeOutlineColor={colors.beige}
          />

          <Button
            mode="contained"
            onPress={() => navigation.navigate("SpacedRepititionDateStart")}
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

          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
        </PaperProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
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
  },
});

export default SpacedRepititionAdd;
