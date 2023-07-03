import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

const KeywordDisplay = () => {
  const [keywords, setKeywords] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleKeywordChange = (text) => {
    setCurrentKeyword(text);
  };

  const handleAddKeyword = () => {
    if (currentKeyword.trim() !== "") {
      setKeywords([...keywords, currentKeyword]);
      setCurrentKeyword("");
    }
  };

  return (
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
      {keywords.map((keyword, index) => (
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
  );
};

export default KeywordDisplay;
