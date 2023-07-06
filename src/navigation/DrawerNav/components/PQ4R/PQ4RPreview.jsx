import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import PQ4RNav from "./PQ4RNav";
import PQ4RKeywordDisplay from "./PQ4RKeywordDisplay";
import { colors } from "../../../../utils/colors";

const PQ4RPreview = () => {
  const activeComponent = "preview";
  return (
    <View style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
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
          Preview
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Enter keywords while {"\n"} skimming you material.
        </Text>
        <PQ4RKeywordDisplay />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
};

export default PQ4RPreview;
