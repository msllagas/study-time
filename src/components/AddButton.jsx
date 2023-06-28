import * as React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { colors } from "../utils/colors";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

/* set your screen
  container:{
    height: '100%',
    backgroundColor:colors.white,
  },

  usage
  <AddButton onPressAdd={()=>console.log("pressed")}
*/
const AddButton = ({ onPressAdd }) => {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      color={colors.blueGreen}
      rippleColor={colors.blueGreen2}
      onPress={onPressAdd}
      customSize={60}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    bottom: 10,
    right: 10,
    borderRadius: 30,

    backgroundColor: colors.white,
  },
});

export default AddButton;
