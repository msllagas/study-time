import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
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
import CalendarDate from "../../../../components/CalendarDate";
import ErrorModal from "../../../../components/ErrorModal";

import { colors } from "../../../../utils/colors";

import Constants from "expo-constants";
import { useAppContext } from "../../../../context/AppContext";

const SpacedRepititionDateStart = ({ navigation }) => {
  const { startDate } = useAppContext();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const _goBack = () => navigation.goBack();

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
          <Text
            style={{
              fontFamily: "AmaticBold",
              fontSize: 48,
              textAlign: "center",
              color: colors.green,
              marginTop: 20,
            }}
          >
            Start When
          </Text>
          <CalendarDate />
          <Button
            mode="contained"
            onPress={
              startDate !== ""
                ? () => navigation.navigate("SpacedRepititionDateEnd")
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
            Set-up Start Date
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

export default SpacedRepititionDateStart;
