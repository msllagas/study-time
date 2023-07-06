import React from "react";
import { useReducer, useContext, createContext, useState } from "react";

const initialState = {};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [topicName, setTopicName] = React.useState("");
  const [numSessions, setNumSessions] = React.useState("0");
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [pqsavedQuestions, setPqSavedQuestions] = useState([]);

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
