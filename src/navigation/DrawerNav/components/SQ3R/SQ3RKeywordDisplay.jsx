import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

const SQ3RKeywordDisplay = () => {
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
    <View
      style={{ marginTop: 20, alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            height: 40,
            width: "60%",
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

export default SQ3RKeywordDisplay;
