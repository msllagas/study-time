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
  import { Button, Appbar, TextInput } from "react-native-paper";
  import AddButton from "../../../../components/AddButton";
  import { useNavigation } from "@react-navigation/native";
  import { colors } from "../../../../utils/colors";
  import Header from "../../../../components/Header";

  //connect to firebase, read&randomize questions, write {userAnswer} -> validate
  //_onSkip function
  const ActiveRecall = ({navigation}) => {
    const _goBack = () => navigation.goBack();
    const [answer, setAnswer] = React.useState("");
    return (
      <SafeAreaView style={styles.container}>  
        <Header title={"Active Recall"} onPressBackArrow={_goBack}/>
        <View style={styles.card}>
          {/* {question} */}
            <Text style={styles.cardContent}>
                Question 1 jsadkadjhsdasa;dkjhkhhjgjf gjhgg jgjhg hjbjhb 
                asdksagdjjhasd
                jskdhsjgdjgdeg
                asdasd
                sadsd
            </Text>
        </View>
        <View style={styles.answerView}>
          {/* {userAnswer} */}
        <Text style={styles.fieldTitle}>Answer</Text>
              <TextInput
              value={answer}
              onChangeText={answer => setAnswer(answer)}
              style={{backgroundColor: colors.lighterGreen}}
              underlineColor={colors.lightGreen}
              activeUnderlineColor={colors.green}
              underlineStyle={{borderRadius:40}}   
        />
        </View>
        <Button 
              mode="outlined" 
              onPress={()=>console.log("skip")}  
              textColor={colors.green}                           
              style={{borderRadius:8, width: '70%', alignSelf:'center', marginVertical:30, borderColor:colors.green}}>
            Skip
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
  
  export default ActiveRecall;
  