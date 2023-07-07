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
import { Button, Appbar, TextInput, PaperProvider, Portal, Modal } from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Header from "../../../../components/Header";
import { collection, query, where, getDocs, getCountFromServer, getDoc, doc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIRESTORE_DB, FIREBASE_AUTH } from "../../../../../firebaseConfig";
import Ionicons from '@expo/vector-icons/Ionicons';

const ActiveRecallQuiz = ({navigation}) => {
  const [userAnswer, setUserAnswer] = React.useState("");
  const [theAnswer, setTheAnswer] = React.useState("");
  const [theQuestion, setTheQuestion] = React.useState("");
  const [QnAs, setQnAs] = React.useState([]);
  const [qnaNum, setQnAnum] = React.useState(0);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const _goBack = () => navigation.goBack();
  const _skip = () => {
    setQnAnum(qnaNum+1);
  }
  const _done = async() => {
    //update isDone field
  }
  const _enter = () => {
    showModal();
    if (userAnswer == theAnswer){
      return(
        <PaperProvider>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text style={{fontSize: 45, fontFamily:'AmaticBold', textAlign:"center", textAlignVertical:'center'}}>You get it right!</Text>
          </Modal>
          </Portal>
        </PaperProvider>
      )
    } 
  }

  class qnaData {
    constructor (num, question, answer ) {
        this.num = num;
        this.question = question;
        this.answer = answer;  
        
        setTheAnswer(answer);
        setTheQuestion(question);
        setQnAnum(num);
    }
    toString() {
        return this.num + ', ' + this.question + ', ' + this.answer;
    }    
  };
  
  const qnaConverter = {
    toFirestore: (qna) => {
        return {
            num: qna.num,
            question: qna.question,
            answer: qna.answer
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new qnaData(data.num, data.question, data.answer);
    }
  };
  
  React.useEffect(() => {
    const fetchQnAs = async () => {      
      try {
        const currentUser = FIREBASE_AUTH.currentUser;
        if (!currentUser){
          console.log("error");
        } else {
          const lastTopicId = await AsyncStorage.getItem('my-key');
          const lastQnAId = await AsyncStorage.getItem('qnaId');
  
          console.log("lastTopicId: "+lastTopicId+" lastQnAId: "+lastQnAId);
  
          const ref = doc(FIRESTORE_DB, "topics", lastTopicId, "qna", lastQnAId).withConverter(qnaConverter);
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {
            // Convert to City object
            const qnaInfo = docSnap.data();
            // Use a City instance method
            console.log(qnaInfo.toString());
          } else {console.log("No such document!");}
  
          const coll = collection(FIRESTORE_DB, 'topics/'+lastTopicId+'/qna');
          const snapshot = await getCountFromServer(coll);
          console.log('count: ', snapshot.data().count);
          const maxQnA = snapshot.data().count;   
          console.log('total num of QnAs'+maxQnA);   
          
          if (qnaNum>maxQnA) {
            setQnAnum(1);
          }
        }//if-else
      } catch (error) {
        console.log("Error fetching qna:", error);
      }
    }
    fetchQnAs();
  })

  return (
    <SafeAreaView style={styles.container}>  
      <Header title={"Active Recall"} onPressBackArrow={()=>navigation.navigate("ActiveRecall")}/>
      <View style={styles.card}>
        {/* {question} */}
          <Text style={styles.cardContent}>{theQuestion}</Text>
      </View>
      <View style={styles.answerView}>
        {/* {userAnswer} */}
          <Text style={styles.fieldTitle}>Answer</Text>
          <View style={{flexDirection:"row", justifyContent:'flex-start'}}>
          <TextInput
            value={userAnswer}
            onChangeText={userAnswer => setUserAnswer(userAnswer)}
            style={{backgroundColor: colors.lighterGreen}}
            underlineColor={colors.lightGreen}
            activeUnderlineColor={colors.green}
            underlineStyle={{borderRadius:40}}   
          />
          <Ionicons name="send" size={40} color={colors.green} onPress={()=>_enter()}/>
          </View>
      </View>
        <Button 
            mode="outlined" 
            onPress={()=>_skip()}  
            textColor={colors.green}                           
            style={{borderRadius:8, width: '70%', alignSelf:'center', marginTop:30, borderColor:colors.green}}>
          Skip
        </Button> 

        <Button 
            mode="outlined" 
            onPress={()=>navigation.navigate("ActiveRecall")}  
            textColor={colors.green}                           
            style={{borderRadius:8, width: '70%', alignSelf:'center', marginVertical:20, marginBottom:10, borderColor:colors.green}}>
          Done
        </Button>     
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
      height: '100%',
      backgroundColor:colors.white,
  },
  card: {
      borderColor:colors.green, 
      borderWidth:2, 
      height:'50%', 
      width:'80%', 
      backgroundColor:colors.lighterGreen,
      alignSelf:'center',
      marginVertical: 20,
      borderRadius: 30,
      alignItems: 'center',
  },
  cardContent: {
      textAlignVertical: 'center',
      height: '100%',
      fontFamily: 'AmaticRegular',
      fontSize: 40,
      textAlign: 'center'
  },
  fieldTitle: {
      fontFamily: 'AmaticBold',
      fontSize: 27,
      marginBottom: 5,
  },
  answerView:{
      width:'70%',
      alignSelf: 'center'
  },
})

export default ActiveRecallQuiz;
