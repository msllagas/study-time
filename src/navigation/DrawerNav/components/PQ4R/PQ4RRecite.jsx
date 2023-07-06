import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";

import PQ4RNav from "./PQ4RNav";
import { colors } from "../../../../utils/colors";

const PQ4RRecite = () => {
  const activeComponent = "recite";
  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "AmaticBold",
            fontSize: 40,
            color: colors.skyBlue,
            marginTop: 80,
            letterSpacing: 4,
          }}
        >
          Recite
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Summarize what you've learned.
        </Text>
        <TextInput
          style={{
            height: 500,
            width: 380,
            borderColor: colors.skyBlue,
            borderWidth: 1,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: colors.skyBlue,
            padding: 10,
            borderRadius: 10,
            width: "40%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
};

export default PQ4RRecite;
