import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Card, IconButton, MD3Colors, Surface } from "react-native-paper";
import { colors } from "../../../utils/colors";
import techniques from "../../../utils/techniques";
import { SafeAreaView } from "react-native-web";

const StudyMethodsCard = ({ title }) => {
  const cardWidth = Dimensions.get("window").width * 0.9;
  return (
    <Surface
    mode="elevated"
      style={{
        position: "relative",
        height: 100,
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
        onPress={() => console.log("Pressed")}
      />
      <View>
        <Text style={{ color: colors.beige, fontSize: 26, fontFamily: 'RockSalt' }}>{title}</Text>
      </View>
    </Surface>
  );
};

const StudyMethods = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.blueGreen, height:'100%'}}>
    <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
      {techniques.map((technique) => (
        <StudyMethodsCard key={technique.id} title={technique.title} />
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};

export default StudyMethods;
