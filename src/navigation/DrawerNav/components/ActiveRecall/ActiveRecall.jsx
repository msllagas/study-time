import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { Button, Appbar, PaperProvider, Portal, Modal, TextInput } from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import TopBar from "../../../TopTabNav/TopBar";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig.js";
import Header from "../../../../components/Header";


// const saveHandler = ({navigation}) => {

// }

// export function useDocId() {
//   return global.thisDocId;
// }
// export const useDocId = () => {
//   return global.thisDocId;
// }

// const [docId, setDocId] = React.useState("");
// export const useDocId = "" + global.thisDocId;
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
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius:8, width:"80%", alignSelf:"center"};

  const navigation = useNavigation();
  const _goto = () => navigation.navigate("ActiveRecallAdd");

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
          createdAt: new Date().toLocaleDateString("en-PH", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            }),
          time: new Date().toLocaleTimeString("en-PH", {
            hour: "2-digit",
            minute: "2-digit",
          }), 
        });

        console.log("topic added with id:", topicData.id);
        storeData(topicData.id);
        getData();
        // global.thisDocId = topicData.id;
        // console.log("topic id from global:", thisDocId);
      } catch (error) {
        console.error("Error adding topic:", error);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        
      {/* <Pressable onPress={() => navigation.navigate("ActiveRecallDone")}>
        <Text>go to DONE</Text>
      </Pressable>  tt*/}
      <Header title="Active Recall" onPressBackArrow={() => navigation.goBack()}/>
      <TopBar tag="active recall" />
            
       <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text 
            style={{fontFamily:'AmaticBold', fontSize:48, textAlign:'center', color:colors.green, marginTop:20}}>
            Topic Name
          </Text>
          <TextInput
            label="Topic"
            value={topicName}
            onChangeText={onTopicChange}
            style={{width:'70%', alignSelf:'center', backgroundColor: colors.lighterGreen}}
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
        </Modal>
      </Portal>

      <AddButton onPressAdd={showModal} />    
      
      </PaperProvider>
      {/* <AddButton onPressAdd={()=>navigation.navigate("ActiveRecallAdd")} />   */}
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor:colors.white,
  },
})

export default ActiveRecall;
