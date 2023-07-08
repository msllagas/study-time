import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import PQ4RNav from "./PQ4RNav";
import PQ4RKeywordDisplay from "./PQ4RKeywordDisplay";
import { colors } from "../../../../utils/colors";

const PQ4RRead = () => {
  const activeComponent = "read";

  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Read</Text>
        <Text style={styles.subtitle}>
          Read the material again. Read and {"\n"} comprehend the topic.
        </Text>
        <PQ4RKeywordDisplay />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontFamily: "AmaticBold",
    fontSize: 40,
    color: colors.skyBlue,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
};

export default PQ4RRead;
