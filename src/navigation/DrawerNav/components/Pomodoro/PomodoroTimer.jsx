import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { colors } from '../../../../utils/colors';
import { IconButton, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

//connect to firebase, read pomodoro on-going topic --> set number, sessions, session time
const children = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)
  const seconds = remainingTime % 60

  return `${hours}:${minutes}:${seconds}`
}

export default function PomodoroTimer({navigation}) {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [duration, setDuration] = React.useState(900)
  const [buttonDisable, setButtonDisable] = React.useState(true)

  const _stopTime = () => {
    setDuration(0);
    setButtonDisable(false);
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <IconButton 
        icon="arrow-left" 
        style={styles.backButton} 
        size={40}
        onPress={()=>navigation.navigate("Pomodoro")}
      />

      <Image 
        style={styles.imageContainer} 
        source={require('../../../../../assets/imgs/logo2.png')} 
        resizeMode="contain"/>

      <Text 
        style={{fontFamily:'FuzzyBubblesBold', fontSize:18, textAlign:'center'}}>
          Study with Pomodoro Method
        </Text>
        
      {/* {sessionNum}, {sessionSet} */}
      <Text style={{fontFamily:'AmaticBold', fontSize:36, textAlign:'center', color:colors.violet, marginVertical:20}}>
        Session 1/4 On Going
      </Text>
      
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        // initialRemainingTime={900}
        // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}        
        // colorsTime={[10, 6, 3, 0]}
        colors={[colors.violet]}
        onComplete={() => ({ shouldRepeat: false})}
        // updateInterval={1}
        isGrowing={true}
        rotation='counterclockwise'
        strokeLinecap='round'
        strokeWidth={16}
        size={260}
      >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 50 }}>
         {children({remainingTime})}
        </Text>
      )}
    </CountdownCircleTimer>

    <Button disabled={buttonDisable} 
      mode='outlined' 
      textColor={colors.violet}
      labelStyle={{fontSize:16}}
      style={styles.nextButton}
      contentStyle={{height: 50}}
      onPress={()=>console.log('next sesh')}>
      Next Session
    </Button>

    <View style={styles.buttonContainer}>
      <View style={styles.playButton}>
        <IconButton
          icon="play-circle-outline"
          iconColor={colors.violet}
          size={90}
          onPress={() => setIsPlaying(prev => !prev)}
        />
      </View >
      <View style={styles.stopButton}>
        <IconButton
          icon="stop-circle-outline"
          iconColor={colors.violet}
          size={90}
          onPress={_stopTime}
        />
      </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
  imageContainer: {
    alignSelf: 'center',
    width: '50%',
  },
  backButton:{
    position:'absolute',
    left:0,
    top: 30,
  },
  nextButton:{
    borderRadius:8, 
    width: '60%', 
    alignSelf:'center', 
    marginBottom:20, 
    marginTop: 50,
    borderColor:colors.violet
  },
  buttonContainer: {
      width: '100%',
      alignSelf: 'center',
      flexDirection:'row',
      justifyContent: 'center',
      bottom:0,
  },
  playButton: {
    borderColor:colors.violet, 
    paddingHorizontal: 20,
    borderRightWidth:1.5
  },
  stopButton: {
    borderColor:colors.violet, 
    paddingHorizontal: 20,
    borderLeftWidth:1.5
  },
});
