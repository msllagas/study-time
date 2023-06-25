import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const AddButton = ({onPress}) => {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "fixed",
    bottom: "50px",
    right: "20px",
    width: "55px",
    borderRadius:30
  },
});

export default AddButton;
