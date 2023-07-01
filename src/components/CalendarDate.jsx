import React from "react";
import { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";

const CalendarDate = () => {
  const [startDate, setStartDate] = useState(null);
  const onDateChange = (date) => {
    setStartDate(date);
  };
  return <CalendarPicker onDateChange={onDateChange} />;
};

export default CalendarDate;
