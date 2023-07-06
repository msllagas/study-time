import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { useFonts } from "expo-font";
import Login from "./src/screens/Login";
import StartUp from "./src/screens/StartUp";
import Register from "./src/screens/Register";
import Drawer from "./src/navigation/DrawerNav/Drawer";
import ActiveRecall from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecall";
import ActiveRecallAdd from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecallAdd";
import ActiveRecallQuiz from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecallQuiz";
import ActiveRecallDone from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecallDone";
import Pomodoro from "./src/navigation/DrawerNav/components/Pomodoro/Pomodoro";
import PomodoroAdd from "./src/navigation/DrawerNav/components/Pomodoro/PomodoroAdd";
import PomodoroTimer from "./src/navigation/DrawerNav/components/Pomodoro/PomodoroTimer";
import PomodoroDone from "./src/navigation/DrawerNav/components/Pomodoro/PomodoroDone";
import SQ3RSurvey from "./src/navigation/DrawerNav/components/SQ3R/SQ3RSurvey";
import SQ3R from "./src/navigation/DrawerNav/components/SQ3R/SQ3R";
import SQ3RQuestion from "./src/navigation/DrawerNav/components/SQ3R/SQ3RQuestion";
import SQ3RRead from "./src/navigation/DrawerNav/components/SQ3R/SQ3RRead";
import SQ3RRecite from "./src/navigation/DrawerNav/components/SQ3R/SQ3RRecite";
import SQ3RReview from "./src/navigation/DrawerNav/components/SQ3R/SQ3RReview";
import PQ4R from "./src/navigation/DrawerNav/components/PQ4R/PQ4R";
import PQ4RPreview from "./src/navigation/DrawerNav/components/PQ4R/PQ4RPreview";
import PQ4RQuestion from "./src/navigation/DrawerNav/components/PQ4R/PQ4RQuestion";
import PQ4RRead from "./src/navigation/DrawerNav/components/PQ4R/PQ4RRead";
import PQ4RReflect from "./src/navigation/DrawerNav/components/PQ4R/PQ4RReflect";
import PQ4RRecite from "./src/navigation/DrawerNav/components/PQ4R/PQ4RRecite";
import PQ4RReview from "./src/navigation/DrawerNav/components/PQ4R/PQ4RReview";
import SpacedRepitition from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepitition";
import SpacedRepititionAdd from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionAdd";
import SpacedRepititionDateStart from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionDateStart";
import SpacedRepititionDateEnd from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionDateEnd";
import SpacedRepititionNotif from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionNotif";
import { AppProvider } from "./src/context/AppContext";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    RockSalt: require("./assets/fonts/RockSalt-Regular.ttf"),
    AmaticBold: require("./assets/fonts/AmaticSC-Bold.ttf"),
    AmaticRegular: require("./assets/fonts/AmaticSC-Regular.ttf"),
    AlumniSansThin: require("./assets/fonts/AlumniSans-Thin.ttf"),
    AlumniSansRegular: require("./assets/fonts/AlumniSans-Regular.ttf"),
    FuzzyBubblesBold: require("./assets/fonts/FuzzyBubbles-Bold.ttf"),
    FuzzyBubblesRegular: require("./assets/fonts/FuzzyBubbles-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  // For development purposes only. Change in initialRouteName to 'StartUp' for production.
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartUp"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="StartUp" component={StartUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Drawer" component={Drawer} />
          <Stack.Screen name="ActiveRecall" component={ActiveRecall} />
          <Stack.Screen name="ActiveRecallAdd" component={ActiveRecallAdd} />
          <Stack.Screen name="ActiveRecallQuiz" component={ActiveRecallQuiz} />
          <Stack.Screen name="ActiveRecallDone" component={ActiveRecallDone} />
          <Stack.Screen name="Pomodoro" component={Pomodoro} />
          <Stack.Screen name="PomodoroAdd" component={PomodoroAdd} />
          <Stack.Screen name="PomodoroTimer" component={PomodoroTimer} />
          <Stack.Screen name="PomodoroDone" component={PomodoroDone} />
          <Stack.Screen name="SQ3R" component={SQ3R} />
          <Stack.Screen name="SQ3RSurvey" component={SQ3RSurvey} />
          <Stack.Screen name="SQ3RQuestion" component={SQ3RQuestion} />
          <Stack.Screen name="SQ3RRead" component={SQ3RRead} />
          <Stack.Screen name="SQ3RRecite" component={SQ3RRecite} />
          <Stack.Screen name="SQ3RReview" component={SQ3RReview} />
          <Stack.Screen name="PQ4R" component={PQ4R} />
          <Stack.Screen name="PQ4RPreview" component={PQ4RPreview} />
          <Stack.Screen name="PQ4RQuestion" component={PQ4RQuestion} />
          <Stack.Screen name="PQ4RRead" component={PQ4RRead} />
          <Stack.Screen name="PQ4RReflect" component={PQ4RReflect} />
          <Stack.Screen name="PQ4RRecite" component={PQ4RRecite} />
          <Stack.Screen name="PQ4RReview" component={PQ4RReview} />
          <Stack.Screen name="SpacedRepitition" component={SpacedRepitition} />
          <Stack.Screen
            name="SpacedRepititionAdd"
            component={SpacedRepititionAdd}
          />
          <Stack.Screen
            name="SpacedRepititionDateStart"
            component={SpacedRepititionDateStart}
          />
          <Stack.Screen
            name="SpacedRepititionDateEnd"
            component={SpacedRepititionDateEnd}
          />
          <Stack.Screen
            name="SpacedRepititionNotif"
            component={SpacedRepititionNotif}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
