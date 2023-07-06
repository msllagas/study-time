import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const DeleteButton = ({ onPressDelete }) => {
  return (
    <AntDesign
      name="delete"
      size={50}
      color="#F45D48"
      onPress={onPressDelete}
    />
  );
};

export default DeleteButton;
