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


//add/delete question function

const QnAfields = ({question, answer, num}) =>{
return (
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
    <Text style={styles.fieldTitle}>Question {num}</Text>
    <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>{question}</Text>
  </View>                    
  <View style={styles.setupContainer}>
    {/* {answerNum} */}
    <Text style={styles.fieldTitle}>Answer {num}</Text>
    <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>{answer}</Text>
  </View>   
</View> 
)
}

const ActiveRecallAdd = ({navigation}) => {
  const [topicQuestion, setQuestion] = React.useState("");
  const [topicAnswer, setAnswer] = React.useState("");
  const [qnaNum, setNum] = React.useState(1);
  const [QnAs, setQnAs] = React.useState()

  const _goBack = () => navigation.goBack();

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius:8, width:"80%", alignSelf:"center"};

  React.useEffect(() => {
    const fetchQnAs = async () => {      
      try {
        const currentUser = FIREBASE_AUTH.currentUser;
        const userId = currentUser.uid; 

        const querySnapshot = await getDocs(collection(FIRESTORE_DB, "topics", value, "qna"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          // setQnAs(doc.id, " => ", doc.data())
        });

        const qnaSnapshot = await getDocs(querySnapshot);
        const qnaData = qnaSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
      } catch (error) {
        console.log("Error fetching done qna:", error);
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

        {/* <View style={styles.qnaContainer}>
          <IconButton 
              icon="delete-circle" 
              iconColor={colors.redOrange}
              style={styles.deleteButton} 
              size={35}
              onPress={()=>console.log("delete this")}
            />
          <View style={styles.setupContainer}>
     
            <Text style={styles.fieldTitle}>Question</Text>
            <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>{topicQuestion}</Text>
          </View>                    
          <View style={styles.setupContainer}>
            
            <Text style={styles.fieldTitle}>Answer</Text>
            <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>{topicAnswer}</Text>
          </View>   
        </View>  */}

        {/* <QnAfields/> */}
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
                placeholder=" "
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
