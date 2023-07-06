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
  } from "react-native";
import React from "react";
import { Button, Appbar, IconButton, TextInput, PaperProvider, Portal, Modal} from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import { colors } from "../../../../utils/colors";
import logo from "../../../../../assets/imgs/logo2.png";
import Header from "../../../../components/Header";
import { collection, query, where, getDocs, updateDoc, documentId, getDoc, doc, setDoc, awaitDoc, addDoc } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig.js";
// import { useDocId } from "./useDocId";
import AsyncStorage from '@react-native-async-storage/async-storage';
  
//const qnaFields =({}) => { return(); };
//connect to firebase, read/write qna, map qna
//add/delete question function


  const ActiveRecallAdd = ({navigation}) => {
    const [topicName, setTopicName] = React.useState("");
    const [isEmptyTopic, setIsEmptyTopic] = React.useState(false);
    const [topicQuestion, setQuestion] = React.useState("");
    const [topicAnswer, setAnswer] = React.useState("");
    const [qnaNum, setNum] = React.useState(1);
    // const useDocId = getData();
    // global.thisValue = getData();
    const _goBack = () => navigation.goBack();

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius:8, width:"80%", alignSelf:"center"};

    const addQnA = async () => {
      try {
        const value = await AsyncStorage.getItem('my-key');
        if (value !== null) {
          // value previously stored     
          // global.docId = value; 
          // console.log("latest id from async: ",global.docId);
          try{
            // const qnaData = {
            //   question: topicQuestion,
            //   answer: topicAnswer,
            //   Num: qnaNum
            // }
            // await addDoc(collection(FIRESTORE_DB, "topics", "${value}", "qnas"), qnaData);

            // const topicData = query(collection(FIRESTORE_DB, "topics"));
            // const topicSnapshot = await getDocs(topicData);
            // const topicQuery = topicSnapshot.docs.map((doc) => ({
            //   id: doc.id,
            //   ...doc.data(),
            // }));
            // console.log(topicQuery);
            // topicQuery.map(async () =>{
            //   await addDoc(doc(FIRESTORE_DB, 'topics/${value}/qna'), {
            //     question: topicQuestion,
            //     answer: topicAnswer,
            //   });
            // })
            
            // const qnaData = collection(FIRESTORE_DB, 'topics/${value}/qna');
            // const qna = awaitDoc(qnaData, {
            //   question: topicQuestion,
            //   answer: topicAnswer,
            // });
            
            const qnaRef = await addDoc(collection(FIRESTORE_DB, 'topics/${value}/qna'), {
              question: topicQuestion,
              answer: topicAnswer,
              num: qnaNum
            });
            console.log("topic added with id:", qnaRef.id);

            console.log("success");
          } catch (error) {
            console.error("Error adding qna:", error);
          }
          setNum(qnaNum+1);
          console.log("latest is from async: ", value);
          setVisible(false);
        } 
      } catch (e) {
        // error reading value
      }
    };

    // const onTopicChange = (text) => {
    //   setTopicName(text);
    //   setIsEmptyTopic(false);
    // };

    // const _add = () => {
    // addTopic();
    // };

    // const addQnA = async () => {
    //   try {
    //     // getData();
    //     // const topicData = doc(FIRESTORE_DB, "topics", useDocId);
    //     // const docSnap = await getDoc(topicData);
    //     // if (docSnap.exists()) {
    //     //   console.log("Document data:", docSnap.data());
    //     // } else {
    //     //   // docSnap.data() will be undefined in this case
    //     //   console.log("No such document!");
    //     // }

    //     //add qna
        
    //     const qnaData = {
    //       topicQuestion: question,
    //       topicAnswer: answer,
    //       Num: qnaNum
    //     }
    //     await addDoc(collection(FIRESTORE_DB, "topics", global.docId, "qna"), qnaData);
    //   } catch (error) {
    //     console.error("Error adding qna:", error);
    //   }
    //   setNum(qnaNum+1);
    //   console.log("global.docId: ",global.docId);
    //   setVisible(false);       
    // }

    // const addTopic = async () => {
    //     try {    
    //       const currentUser = FIREBASE_AUTH.currentUser;
    //       const userId = currentUser.uid;   
    //       const topicData = {
    //         title: topicName,
    //         userId: userId,
    //         tag: "active recall",
    //         isDone: false,
    //         technique: {
    //           date: new Date().toLocaleDateString("en-PH", {
    //             month: "2-digit",
    //             day: "2-digit",
    //             year: "numeric",
    //           }),
    //         },
    //         time: new Date().toLocaleTimeString("en-PH", {
    //           hour: "2-digit",
    //           minute: "2-digit",
    //         }), 
    //       };
    //       await addDoc(collection(FIRESTORE_DB, "topics"), topicData);
    //       setDocId(topicData.id);
    //       //gotoThis;
    //     } catch (error) {
    //       console.error("Error adding topic:", error);
    //     }

    // }; //addTopic end

    return (
      <SafeAreaView style={styles.viewContainer}>
        <Header title="Active Recall" onPressBackArrow={_goBack}/>
        <PaperProvider>
        <ScrollView>         
          <Image style={styles.imageContainer} source={logo} resizeMode="cover"/>
          <Text 
            style={{fontFamily:'FuzzyBubblesBold', fontSize:16, textAlign:'center', paddingHorizontal:15}}>
            Study with Active Recall. Set your questions and answers for your flashcard.
          </Text>

          {/* <Text 
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
          /> */}

          <View style={styles.qnaContainer}>
            <IconButton 
                icon="delete-circle" 
                iconColor={colors.redOrange}
                style={styles.deleteButton} 
                size={35}
                onPress={()=>console.log("delete this")}
              />
            <View style={styles.setupContainer}>
              {/* {questionNum} */}
              <Text style={styles.fieldTitle}>Question</Text>
              <Text style={{backgroundColor:colors.lighterGreen, borderBottomColor:colors.lightGreen, borderBottomWidth: .5, paddingVertical: 15, paddingHorizontal: 10}}>{topicQuestion}</Text>
            </View>                    
            <View style={styles.setupContainer}>
              {/* {answerNum} */}
              <Text style={styles.fieldTitle}>Answer</Text>
              <Text style={{backgroundColor:colors.lighterGreen, borderBottomColor:colors.lightGreen, borderBottomWidth: .5, paddingVertical: 15, paddingHorizontal: 10}}>{topicAnswer}</Text>
            </View>   
          </View> 
          
          <Button 
              mode="contained" 
              onPress={() => console.log("add")} 
              buttonColor={colors.green}
              textColor={colors.white}
              style={{borderRadius:8, width: '70%', alignSelf:'center', marginVertical:30}}>
            Start
          </Button>
        </ScrollView>     

          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <View style={styles.qnaContainer}>
                <View style={styles.setupContainer}>
                  {/* {questionNum} */}
                  {/* <Text style={styles.fieldTitle}>Question</Text> */}
                  <TextInput
                  label={"Question "+qnaNum}  //{questionNum}
                  value={topicQuestion}
                  onChangeText={topicQuestion => setQuestion(topicQuestion)}
                  style={{backgroundColor: colors.lighterGreen}}
                  underlineColor={colors.lightGreen}
                  activeUnderlineColor={colors.green}
                  underlineStyle={{borderRadius:10}}
                  />
                </View>                    
                <View style={styles.setupContainer}>
                  {/* {answerNum} */}
                  {/* <Text style={styles.fieldTitle}>Answer</Text> */}
                  <TextInput
                  label={"Answer "+qnaNum} //{answerNum}
                  value={topicAnswer}
                  onChangeText={topicAnswer => setAnswer(topicAnswer)}
                  style={{backgroundColor: colors.lighterGreen}}
                  underlineColor={colors.lightGreen}
                  activeUnderlineColor={colors.green}
                  underlineStyle={{borderRadius:10}}
                  />
                </View>   
              </View>
              {/* <addTopic topicTitle={topicName} quest={question} ans={answer}/> */}
              <Button 
                mode="contained" 
                // onPress={()=>addQnA()} 
                onPress={()=>addQnA()}
                buttonColor={colors.green}
                textColor={colors.white}
                style={{borderRadius:8, width: '60%', alignSelf:'center', marginVertical:20}}>
                Add
              </Button>
            </Modal>
          </Portal>

          <AddButton onPressAdd={showModal}/>

        </PaperProvider>
      </SafeAreaView>
    );
  };

  const styles =StyleSheet.create({
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
      marginBottom: 30,
      width: '70%',
      alignSelf: 'center',
    },
    deleteButton: {
      position:'relative',
      top: '20%',
      alignSelf:'flex-end'

    },
  })
  
  export default ActiveRecallAdd;
  