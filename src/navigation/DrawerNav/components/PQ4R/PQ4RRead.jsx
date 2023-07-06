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

const PQ4RRead = () => {
  const activeComponent = "read";
  return (
    <SafeAreaView style={styles.container}>
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
          Read
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Read the material again. Read and {"\n"} comprehend the topic.
        </Text>
        <PQ4RKeywordDisplay />
      </View>{" "}
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
};

export default PQ4RRead;
