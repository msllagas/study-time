import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

const PQ4RKeywordDisplay = () => {
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
    <View style={{ marginTop: 20, flexDirection: "column" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              height: 40,
              width: "60%",
              borderColor: "#608BF9",
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
              backgroundColor: "#608BF9",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={handleAddKeyword}
          >
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {keywords.map((keyword, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#DFEBFD",
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

export default PQ4RKeywordDisplay;
