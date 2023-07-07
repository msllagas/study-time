import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Pressable,
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
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../utils/colors";
import techniques from "../../../utils/techniques";



const StudyMethodsCard = ({ title, description, onPress }) => {

  const navigation = useNavigation();
  const cardWidth = Dimensions.get("window").width * 0.9;

  const navigateToPage = () => {
    if (title === "Pomodoro Method" ) {
      navigation.navigate("Pomodoro");
    } else if (title === "Active Recall"){
      navigation.navigate("ActiveRecall");
    }else if (title === "Spaced Repetition"){
      navigation.navigate("SpacedRepitition");
    }else if (title === "SQR3 Method"){
      navigation.navigate("SQ3R");
    }else if (title === "PQ4R Method"){
      navigation.navigate("PQ4R");
    }
  }

  return (
    <Pressable onPress={navigateToPage}>
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
    </Pressable>
  );
};

const StudyMethods = () => {
  const [visible, setVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    title: "",
    description: "",
  });

  const showModal = (title, description) => {
    setModalContent({ title, description });
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: "white", padding: 20, marginHorizontal: 20, borderRadius: 10 };
  
 
  
  return (
    <SafeAreaView style={{ backgroundColor: colors.blueGreen, height: "100%" }}>
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text variant="bodyLarge">{modalContent.description}</Text>
          </Modal>
        </Portal>
        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {techniques.map((technique) => (
            <StudyMethodsCard
              key={technique.id}
              title={technique.title}
              description={technique.description}
              onPress={showModal}
            />
          ))}
        </ScrollView>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default StudyMethods;
