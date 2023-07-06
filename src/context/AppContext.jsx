import React from "react";
import { useReducer, useContext, createContext, useState } from "react";

const initialState = {};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //spacedRepetition
  const [topicName, setTopicName] = React.useState("");
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [pqsavedQuestions, setPqSavedQuestions] = useState([]);
  const [numSessions, setNumSessions] = React.useState(3);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [schedule, setSchedule] = useState("");
  
  return (
    // export the function and state here
    <AppContext.Provider
      value={{
        topicName,
        setTopicName,
        numSessions,
        setNumSessions,
        savedQuestions,
        setSavedQuestions,
        pqsavedQuestions,
        setPqSavedQuestions,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        schedule,
        setSchedule,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//hook for appcontext
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
