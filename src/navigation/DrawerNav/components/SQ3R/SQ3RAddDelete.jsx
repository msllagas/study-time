import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../utils/colors";

const SQ3RAddDelete = ({ onPressAdd }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Ionicons
          name="add-circle-outline"
          size={60}
          color={colors.pink}
          borderColor={colors.pink}
          onPress={onPressAdd}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="md-trash-bin-outline"
          size={56}
          color={colors.pink}
          onPress={onPressAdd}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 200,
    right: 25,
    alignContent: "center",
  },
});

export default SQ3RAddDelete;
