import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Card, IconButton, MD3Colors } from "react-native-paper";
import { colors } from "../../../utils/colors";
import techniques from "../../../utils/techniques";

const StudyMethodsCard = ({ title }) => {
  const cardWidth = Dimensions.get("window").width * 0.9;
  return (
    <View
      style={{
        position: "relative",
        height: 100,
        width: cardWidth,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.redOrange,
        borderBottomWidth: 4,
        elevation: 15,
        shadowColor: colors.blueGreen,
      }}
    >
      <IconButton
        icon="help-circle-outline"
        iconColor="white"
        size={25}
        style={{ position: "absolute", top: 0, right: 0 }}
        onPress={() => console.log("Pressed")}
      />
      <View>
        <Text style={{ color: colors.blueGreen, fontSize: 26 }}>{title}</Text>
      </View>
    </View>
  );
};

const StudyMethods = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
      {techniques.map((technique) => (
        <StudyMethodsCard key={technique.id} title={technique.title} />
      ))}
    </ScrollView>
  );
};

export default StudyMethods;
