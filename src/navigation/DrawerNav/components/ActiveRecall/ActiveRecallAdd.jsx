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
  import { Button, Appbar, IconButton, TextInput } from "react-native-paper";
  import AddButton from "../../../../components/AddButton";
  import { useNavigation } from "@react-navigation/native";
  import Constants from 'expo-constants';
  import { colors } from "../../../../utils/colors";
  
  const ActiveRecall = ({navigation}) => {
    const [topicName, setTopicName] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const _goBack = () => navigation.goBack();
    return (
      <SafeAreaView style={styles.viewContainer}>
        <ScrollView style={{paddingBottom:20}}>
        <IconButton 
              icon="arrow-left" 
              style={styles.backButton} 
              size={40}
              onPress={_goBack}
            />

            <Image 
              style={styles.imageContainer} 
              source={require('../../../../../assets/imgs/logo2.png')} 
              resizeMode="contain"
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
              style={{width:'70%', alignSelf:'center', marginBottom:30, backgroundColor: colors.lighterGreen}}
              underlineColor={colors.lightGreen}
              activeUnderlineColor={colors.green}
            />
            <View style={styles.setupContainer}>
              <Text style={styles.fieldTitle}>Question 1</Text>
              <TextInput
              label="Question 1"
              value={question}
              onChangeText={question => setQuestion(question)}
              style={{backgroundColor: colors.lighterGreen}}
              underlineColor={colors.lightGreen}
              activeUnderlineColor={colors.green}
              underlineStyle={{borderRadius:10}}
              />
            </View>            

            
        </ScrollView>
        <AddButton onPressAdd={()=>console.log("add a QnA")}/>
      </SafeAreaView>
    );
  };

  const styles =StyleSheet.create({
    viewContainer:{
      paddingTop: Constants.statusBarHeight,
      backgroundColor: colors.white,
      height: '100%'
    },
    backButton:{
      position:'absolute',
      left:0,
      top: 0,
    },
    imageContainer: {
      alignSelf: 'center',
      width: '50%',
      marginTop: 20,
    },
    setupContainer: {
      width: '70%',
      alignSelf: 'center',
      marginVertical: 20,      
    },
    fieldTitle: {
      fontFamily: 'AmaticRegular',
      fontSize: 32,
      color: colors.green,
    },
  })
  
  export default ActiveRecall;
  