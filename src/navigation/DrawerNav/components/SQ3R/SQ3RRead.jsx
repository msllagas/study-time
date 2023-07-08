import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AddButton from "../../../../components/AddButton";
import SQ3RNav from "./SQ3RNav";
import { colors } from "../../../../utils/colors";
import SQ3RKeywordDisplay from "./SQ3RKeywordDisplay";
import { useAppContext } from "../../../../context/AppContext";

const SQ3RRead = () => {
  const activeComponent = "read";
  const { readkeywords, setReadKeywords } = useAppContext();
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleKeywordChange = (text) => {
    setCurrentKeyword(text);
  };

  const handleAddKeyword = () => {
    if (currentKeyword.trim() !== "") {
      setReadKeywords([...readkeywords, currentKeyword]);
      setCurrentKeyword("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <SQ3RNav activeComponent={activeComponent} />
      <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "AmaticBold",
            fontSize: 40,
            color: colors.pink,
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
      </View>
      <View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={{
                  flex: 1,
                  height: 40,
                  borderColor: "#E1A8EF",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                }}
                placeholder="Type a keyword"
                onChangeText={handleKeywordChange}
                value={currentKeyword}
              />
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  backgroundColor: "#DA60F9",
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={handleAddKeyword}
              >
                <Text style={{ color: "white" }}>Add</Text>
              </TouchableOpacity>
            </View>
            {readkeywords.map((keyword, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#E1A8EF",
                  marginTop: 10,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text>{keyword}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
};

export default SQ3RRead;
