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
const AddButton = ({onPressAdd}) => {
  return (
    <View style={styles.fabView}>
    <FAB
      icon="plus"
      style={styles.fab}
      color={colors.blueGreen}
      rippleColor={colors.blueGreen2}
      onPress={onPressAdd}
      
    />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    // position: "fixed",
    // bottom: "50px",
    // right: "20px",
    // width: "55px",
    // borderRadius:30
    position: 'absolute',
      margin: 16,
      right: 0,
      //bottom: 0,
      borderRadius:30,
      // backgroundColor: colors.blueGreen1,
      backgroundColor: colors.white,
  },
  fabView:{
    flex:1,
    justifyContent: 'flex-end',
    bottom: 50
    // marginBottom: 50
  },
});

export default AddButton;
