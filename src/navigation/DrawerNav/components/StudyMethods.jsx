import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Button,
  Card,
  IconButton,
  MD3Colors,
  Surface,
  Modal,
  PaperProvider,
  Portal,
  Text
} from "react-native-paper";
import { colors } from "../../../utils/colors";
import techniques from "../../../utils/techniques";
// import { SafeAreaView } from "react-native-web";

const StudyMethodsCard = ({ title, description, onPress }) => {
  const cardWidth = Dimensions.get("window").width * 0.9;
  return (
    <Surface
      mode="elevated"
      style={{
        position: "relative",
        height: 125,
        width: cardWidth,
        borderColor: "rgba(0, 0, 0, .6)",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.redOrange,
        borderBottomWidth: 4,
      }}
      elevation={3}
    >
      <IconButton
        icon="help-circle-outline"
        iconColor="white"
        size={25}
        style={{ position: "absolute", top: 0, right: 0 }}
        onPress={() => onPress(title, description)}
      />

      <View>
        <Text
          style={{ color: colors.beige, fontSize: 26, fontFamily: "RockSalt" }}
        >
          {title}
        </Text>
      </View>
    </Surface>
  );
};

const StudyMethods = () => {
  const [visible, setVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({ title: "", description: "" });

  const showModal = (title, description) => {
    setModalContent({ title, description }); 
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <SafeAreaView style={{ backgroundColor: colors.blueGreen, height: "100%" }}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <PaperProvider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <Text>{modalContent.description}</Text>
            </Modal>
          </Portal>
          {techniques.map((technique) => (
            <StudyMethodsCard
              key={technique.id}
              title={technique.title}
              description={technique.description}
              onPress={showModal}
            />
          ))}
        </PaperProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudyMethods;
