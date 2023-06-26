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
import { Button, Appbar, IconButton, TextInput} from "react-native-paper";
import AddButton from "../../../../components/AddButton";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import { colors } from "../../../../utils/colors";
import Header from "../../../../components/Header";
  
//const qnaFields =({}) => { return(); };
//connect to firebase, read/write qna, map qna
//add/delete question function
  const ActiveRecall = ({navigation}) => {
    const [topicName, setTopicName] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const _goBack = () => navigation.goBack();
    return (
      <SafeAreaView style={styles.viewContainer}>
        <Header title="Active Recall" onPressBackArrow={_goBack}/>
        <ScrollView>         
          <Image 
            style={styles.imageContainer} 
            source={require('../../../../../assets/imgs/logo2.png')} 
            resizeMode="cover"
          />
          <Text 
            style={{fontFamily:'FuzzyBubblesBold', fontSize:16, textAlign:'center', paddingHorizontal:15}}>
            Study with Active Recall. Set your questions and answers for your flashcard.
          </Text>

          <Text 
            style={{fontFamily:'AmaticBold', fontSize:48, textAlign:'center', color:colors.green, marginTop:20}}>
            Topic Name
          </Text>
          <TextInput
            label="Topic"
            value={topicName}
            onChangeText={topicName => setTopicName(topicName)}
            style={{width:'70%', alignSelf:'center', backgroundColor: colors.lighterGreen}}
            underlineColor={colors.lightGreen}
            activeUnderlineColor={colors.green}
          />

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
              <Text style={styles.fieldTitle}>Question 1</Text>
              <TextInput
              label="Question 1"  //{questionNum}
              value={question}
              onChangeText={question => setQuestion(question)}
              style={{backgroundColor: colors.lighterGreen}}
              underlineColor={colors.lightGreen}
              activeUnderlineColor={colors.green}
              underlineStyle={{borderRadius:10}}
              />
            </View>                    
            <View style={styles.setupContainer}>
              {/* {answerNum} */}
              <Text style={styles.fieldTitle}>Answer 1</Text>
              <TextInput
              label="Answer 1" //{answerNum}
              value={answer}
              onChangeText={answer => setAnswer(answer)}
              style={{backgroundColor: colors.lighterGreen}}
              underlineColor={colors.lightGreen}
              activeUnderlineColor={colors.green}
              underlineStyle={{borderRadius:10}}
              />
            </View>   
          </View> 
          
          <Button 
              mode="contained" 
              onPress={()=>navigation.navigate("ActiveRecallQuiz")} 
              buttonColor={colors.green}
              style={{borderRadius:8, width: '70%', alignSelf:'center', marginVertical:30}}>
            Start
          </Button>
        </ScrollView>

        <AddButton onPressAdd={()=>console.log("add a QnA")}/>
        
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
  
  export default ActiveRecall;
  