import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const AddButton = () => {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => console.log("Pressed")}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "55px",
  },
});

export default AddButton;
