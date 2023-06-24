import {
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet,
    Pressable,
    Image,
    ScrollView
  } from "react-native";
import React from 'react';
import { Button, 
    Appbar,
    IconButton,
    TextInput,
    Modal,
    Portal,
    Text, 
    PaperProvider} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../utils/colors";
import Constants from 'expo-constants';
  
  
  
const PomodoroAdd = ({navigation}) => {
  const [topicName, setTopicName] = React.useState("");
  const [startTime, setStartTime] = React.useState("0");
  const [increment, setIncrement] = React.useState("0");
  const [sessionSet, setSessionSet] = React.useState("0");
  const [breakTime, setBreakTime] = React.useState("0");
  const [sessions, setSessions] = React.useState("0");
  const [shortBreak, setShortBreak] = React.useState("0");

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, width: '80%', alignSelf:'center', borderRadius:8};

  const _goBack = () => navigation.goBack();
    return (
      <SafeAreaView style={styles.viewContainer}> 
        <ScrollView style={{paddingBottom:20}}>
          <PaperProvider>
            <IconButton 
              icon="arrow-left" 
              style={styles.backButton} 
              size={40}
              onPress={()=>navigation.navigate("Pomodoro")}
            />
            
            <IconButton
              icon="help-circle-outline"
              iconColor={colors.redOrange}
              size={25}
              style={{ position: "absolute", top: 20 , right: 0 }}
              onPress={showModal}
            />

            <Image 
              style={styles.imageContainer} 
              source={require('../../../../../assets/imgs/logo2.png')} 
              resizeMode="contain"
            />

            <Text 
              style={{fontFamily:'FuzzyBubblesBold', fontSize:18, textAlign:'center'}}>
              Study with Pomodoro Method
            </Text>

            <Text 
              style={{fontFamily:'AmaticBold', fontSize:48, textAlign:'center', color:colors.violet, marginTop:20}}>
              Topic Name
            </Text>

            <TextInput
              label="Topic"
              value={topicName}
              onChangeText={topicName => setTopicName(topicName)}
              style={{width:'70%', alignSelf:'center', marginBottom:30}}
            />

          <View style={styles.setupContainer}>             
            <Text style={styles.largeText}>Start at 
              <Text style={styles.smallText}>(min)
              </Text>
            </Text>
            <TextInput
              value={startTime}
              onChangeText={startTime => setStartTime(startTime)}
              style={styles.setupInput}
              mode="outlined"
            />            
          </View>

          <View style={styles.setupContainer}>             
            <Text style={styles.largeText}>Increments 
              <Text style={styles.smallText}>(min)
              </Text>
            </Text>
            <TextInput
              value={increment}
              onChangeText={increment => setIncrement(increment)}
              style={styles.setupInput}
              mode="outlined"
            />
          </View>

          <View style={styles.setupContainer}>             
            <Text style={styles.largeText}>Session Set</Text>
            <TextInput
              value={sessionSet}
              onChangeText={sessionSet => setSessionSet(sessionSet)}
              style={styles.setupInput}
              mode="outlined"
            />
          </View>

          <View style={styles.setupContainer}>             
            <Text style={styles.largeText}>Break Time <Text style={styles.smallText}>(min)</Text></Text>
            <TextInput
              value={breakTime}
              onChangeText={breakTime => setBreakTime(breakTime)}
              style={styles.setupInput}
              mode="outlined"
            />
          </View>

          <View style={styles.setupContainer}>             
            <Text style={styles.largeText}>Sessions</Text>
            <TextInput
              value={sessions}
              onChangeText={sessions => setSessions(sessions)}
              style={styles.setupInput}
              mode="outlined"
            />
          </View>

          <View style={styles.setupContainer}>             
            <Text style={styles.largeText}>Short Break <Text style={styles.smallText}>(min)</Text></Text>
            <TextInput
              value={shortBreak}
              onChangeText={shortBreak => setShortBreak(shortBreak)}
              style={styles.setupInput}
              mode="outlined"
            />
          </View>
          
          <Button 
            mode="contained" 
            onPress={()=>navigation.navigate("PomodoroTimer")} 
            style={{borderRadius:8, width: '70%', alignSelf:'center', marginVertical:30}}>
              Start
          </Button>

          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>

          </PaperProvider>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default PomodoroAdd;

  const styles = StyleSheet.create({
    viewContainer:{
      paddingTop: Constants.statusBarHeight,
      backgroundColor: colors.white,
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
      marginVertical: 10,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    largeText: {
      fontFamily: 'AmaticBold',
      fontSize: 32,
      color: colors.violet,
    },
    smallText: {
      fontFamily:'AmaticRegular',
      fontSize: 16,
      color: colors.violet
    },
    setupInput: {
      width:'30%',
      alignSelf:'center'
    },
  })