import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity
} from "react-native";
import React from "react";
import { Button, Appbar, IconButton, TextInput} from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import { colors } from "../../../../utils/colors";
import logo from "../../../../../assets/imgs/logo2.png";
import Header from "../../../../components/Header";
import { collection, query, where, getDocs, updateDoc, documentId, getDoc, doc, setDoc, awaitDoc, addDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from "@expo/vector-icons";


const QnAfields = ({question, answer, num}) =>{
return (
  <View style={styles.qnaContainer}>  
    <View style={styles.setupContainer}>
      {/* {questionNum} */}
      <Text style={styles.fieldTitle}>Question {num}</Text>
      <Text style={{paddingVertical: 5, paddingHorizontal: 10}}>{question}</Text>
    </View>                    
    <View style={styles.setupContainer}>
      {/* {answerNum} */}
      <Text style={styles.fieldTitle}>Answer {num}</Text>
      <Text style={{paddingVertical: 5, paddingHorizontal: 10}}>{answer}</Text>
    </View>   
  </View> 
)}

const storeQnAid = async (value) => {
  try {
    await AsyncStorage.setItem('qnaId', value);
  } catch (e) {
    console.log("error storing id")
  }
};

const getQnAid = async () => {
  try {
    const value = await AsyncStorage.getItem('qnaId');
    if (value !== null) {
      // value previously stored
      console.log("qna id from async: ",value);
    }
  } catch (e) {
    // error reading value
  }
};

const ActiveRecallAdd = ({navigation}) => {
  const [topicQuestion, setQuestion] = React.useState("");
  const [topicAnswer, setAnswer] = React.useState("");
  const [qnaNum, setNum] = React.useState(1);
  const [QnAs, setQnAs] = React.useState([])

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);  

  const delQnA = async () => {
    const docuId = await AsyncStorage.getItem('my-key');
    const qnaId = await AsyncStorage.getItem('qnaId');
    await deleteDoc(doc(FIRESTORE_DB, "topics", docuId,"qna", qnaId));
    console.log("qna deleted");
    setNum(qnaNum-1);
  };

  React.useEffect(() => {
    const fetchQnAs = async () => {      
      try {
        const currentUser = FIREBASE_AUTH.currentUser;
        if (!currentUser){
          console.log("error");
        } else {
          const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'topics/'+global.docId+'/qna'));
          const qnaData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setQnAs(qnaData);
        }//if-else
      } catch (error) {
        console.log("Error fetching qna:", error);
      }
    }
    fetchQnAs();
  }), [QnAs];

  const addQnA = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        try{
          const qnaRef = await addDoc(collection(FIRESTORE_DB, 'topics/'+value+'/qna'), {
            question: topicQuestion,
            answer: topicAnswer,
            num: qnaNum
          });
          console.log("qna added with id:", qnaRef.id);
          storeQnAid(qnaRef.id);
          getQnAid();

          console.log("success");
        } catch (error) {
          console.error("Error adding qna:", error);
        }

        setNum(qnaNum+1);
        console.log("latest is from async: ", value);
        setVisible(false);
        global.docId=value;
        console.log("id from global: ", global.docId);
        setAnswer("");
        setQuestion("");
      } 
    } catch (e) {
      console.log("error reading value: ", e);
    }
  };

  const _goBack = () => {
    navigation.goBack();
    // await deleteDoc(doc(FIRESTORE_DB, "topics", global.docId));
    // console.log("cancelled adding topic");
  }

  return (
    <SafeAreaView style={styles.viewContainer}>
      <Header title="Active Recall" onPressBackArrow={_goBack}/>      
      <ScrollView>         
        <Image style={styles.imageContainer} source={logo} resizeMode="cover"/>
        <Text 
          style={{fontFamily:'FuzzyBubblesBold', fontSize:16, textAlign:'center', paddingHorizontal:15}}>
          Study with Active Recall. Set your questions and answers for your flashcard.
        </Text>
        <IconButton 
          icon="delete-circle" 
          iconColor={colors.redOrange}
          style={styles.deleteButton} 
          size={40}
          onPress={()=>delQnA()}
        />
       
        <FlatList
          data = {QnAs}
          renderItem={(qna) => (
            <QnAfields
              key={qna.id}
              question={qna.item.question}
              answer={qna.item.answer}
              num={qna.item.num}
            />
          )}
          keyExtractor={(qna) => qna.id}
          showsVerticalScrollIndicator = {false}
          style={styles.scrollView}
          contentContainerStyle={{justifyContent: 'center'}}
          bounces={false}
        />
      </ScrollView>     
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate("ActiveRecallQuiz")} 
          buttonColor={colors.green}
          textColor={colors.white}
          style={{borderRadius:8, width: '70%', alignSelf:'center', marginTop:30, marginBottom:10}}>
        Start
        </Button>
          <Modal visible={visible} onRequestClose={hideModal} animationType="fade" transparent={true}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
                <AntDesign name="close" size={35} color="gray" />
                </TouchableOpacity>
                <View style={styles.qnaContainer}>
                  <View style={styles.setupContainer}>
                    <TextInput
                    label={"Question "+qnaNum}  
                    value={topicQuestion}
                    placeholder=" "
                    onChangeText={topicQuestion => setQuestion(topicQuestion)}
                    style={{backgroundColor: colors.lighterGreen}}
                    underlineColor={colors.lightGreen}
                    activeUnderlineColor={colors.green}
                    underlineStyle={{borderRadius:10}}
                    />
                  </View>                    
                  <View style={styles.setupContainer}>
                    <TextInput
                    label={"Answer "+qnaNum} 
                    placeholder=" "
                    value={topicAnswer}
                    onChangeText={topicAnswer => setAnswer(topicAnswer)}
                    style={{backgroundColor: colors.lighterGreen}}
                    underlineColor={colors.lightGreen}
                    activeUnderlineColor={colors.green}
                    underlineStyle={{borderRadius:10}}
                    />
                  </View>   
                </View>                
                <Button 
                  mode="contained" 
                  onPress={()=>addQnA()}
                  buttonColor={colors.green}
                  textColor={colors.white}
                  style={{borderRadius:8, width: '60%', alignSelf:'center', marginVertical:20}}>
                  Add
                </Button>
              </View>
            </View>
          </Modal>
        <AddButton onPressAdd={showModal}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer:{
    backgroundColor: colors.white,
    height: '100%'
  },
  backButton:{
    position:'absolute',
    left:0,
  },
  imageContainer: {
    alignSelf: 'center',      
    marginBottom: 5,
  },
  setupContainer: {      
    marginVertical: 10,   
    width: '100%'   
  },
  fieldTitle: {
    fontFamily: 'AmaticRegular',
    fontSize: 27,
    color: colors.green,
    marginBottom: 5
  },
  qnaContainer:{
    marginTop:30,
    marginBottom: 10,
    width: '70%',
    alignSelf: 'center',
  },
  deleteButton: {
    position:'relative',
    top: '20%',
    alignSelf:'flex-end'
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

export default ActiveRecallAdd;
