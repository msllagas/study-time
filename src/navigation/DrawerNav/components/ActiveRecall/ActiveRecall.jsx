import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableOpacity
} from "react-native";
import React from "react";
import { Button, Appbar, PaperProvider, Portal, TextInput } from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import TopBar from "../../../TopTabNav/TopBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from "@expo/vector-icons";
import Header from "../../../../components/Header";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig.js";


const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    console.log("error storing id")
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
      console.log("id from async: ",value);
    }
  } catch (e) {
    // error reading value
  }
};

const ActiveRecall = () => {
  const [topicName, setTopicName] = React.useState("");
  const [isEmptyTopic, setIsEmptyTopic] = React.useState(false);

  const [visible, setVisible] = React.useState(false);
  const showModal = () => {setVisible(true); setTopicName("")}
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius:8, width:"80%", alignSelf:"center"};

  const navigation = useNavigation();
  const _goto = () => navigation.navigate("ActiveRecallAdd");
  const _goBack = () => navigation.navigate("StudyMethods");

  const onTopicChange = (text) => {
    setTopicName(text);
    setIsEmptyTopic(false);
  };

  function _add() {
    addTopic();
    setVisible(false);
    _goto();
  }

  const addTopic = async () => {
      try {    
        const currentUser = FIREBASE_AUTH.currentUser;
        const userId = currentUser.uid;     

        const topicData = await addDoc(collection(FIRESTORE_DB, "topics"), {
          title: topicName,
          userId: userId,
          tag: "active recall",
          isDone: false,
          createdAt: new serverTimestamp(),
          time: new Date().toLocaleTimeString("en-PH", {
            hour: "2-digit",
            minute: "2-digit",
          }), 
        });

        console.log("topic added with id:", topicData.id);
        storeData(topicData.id);
        getData();
      } catch (error) {
        console.error("Error adding topic:", error);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Active Recall" nPressBackArrow={() => navigation.goBack()}/>  
      <TopBar tag="active recall" />
      <Modal visible={visible} onRequestClose={hideModal} animationType="fade" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
            <AntDesign name="close" size={35} color="gray" />
          </TouchableOpacity>
          <Text 
          style={{fontFamily:'AmaticBold', fontSize:48, textAlign:'center', color:colors.green, marginTop:25, marginBottom: 20}}>
          Topic Name
        </Text>
        <TextInput
          label="Title"
          value={topicName}
          onChangeText={onTopicChange}
          style={{width:'80%', alignSelf:'center', backgroundColor: colors.lighterGreen, marginBottom:20}}
          underlineColor={colors.lightGreen}
          activeUnderlineColor={colors.green}
          error = {isEmptyTopic}
        />
        <Button 
            mode="contained" 
            onPress={()=>_add()} 
            buttonColor={colors.green}
            textColor={colors.white}
            style={{borderRadius: 8, width: '70%', alignSelf:'center', marginVertical:30}}>
          Next
        </Button>
          </View>
        </View>
      </Modal>
      <AddButton onPressAdd={showModal} />    
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor:colors.white,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContainer: {
    backgroundColor: colors.white,
    height: 300,
    width: 280,
    borderRadius: 10,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    marginTop: 10,
  },
})

export default ActiveRecall;
