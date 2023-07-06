import React from "react";
import { useReducer, useContext, createContext, useState } from "react";

const initialState = {};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [topicName, setTopicName] = React.useState("");
  const [numSessions, setNumSessions] = React.useState(3);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    // export the function and state here
    <AppContext.Provider
      value={{
        topicName,
        setTopicName,
        numSessions,
        setNumSessions,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
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
