import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import PQ4RNav from "./PQ4RNav";
import { colors } from "../../../../utils/colors";
import { useAppContext } from "../../../../context/AppContext";

const PQ4RRecite = () => {
  const activeComponent = "recite";
  const [isModalVisible, setModalVisible] = useState(false);
  const { summarypqText, setSummarypqText } = useAppContext();

  const handleSummaryChange = (text) => {
    setSummarypqText(text);
  };

  const handleUpdateButton = () => {
    if (Array.isArray(summarypqText)) {
      const updatedSummary = summarypqText.join("");
      setSummarypqText(updatedSummary);
    }
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PQ4RNav activeComponent={activeComponent} />
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <Text
          style={{
            fontFamily: "AmaticBold",
            fontSize: 40,
            color: "#608BF9",
            marginTop: 80,
            letterSpacing: 4,
          }}
        >
          Recite
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          Summarize what you've learned.
        </Text>
        <View style={{ height: 500, width: 380 }}>
          <TextInput
            style={{
              flex: 1,
              borderColor: "#608BF9",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              textAlign: "left",
            }}
            multiline={true}
            value={summarypqText}
            onChangeText={handleSummaryChange}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: "#608BF9",
              padding: 10,
              borderRadius: 10,
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleUpdateButton}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Save
            </Text>
          </TouchableOpacity>
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
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    width: "40%",
    height: 47,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    width: 254,
    height: 268,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#608BF9",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
};

export default PQ4RRecite;
