import React from "react";
import { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { useAppContext } from "../context/AppContext";

const CalendarDate = ({ endPoint }) => {
  const { startDate, setStartDate, endDate, setEndDate } = useAppContext();

  const onDateChange = (date) => {
    if (endPoint === "end") {
      setEndDate(date);
      return;
    }
    console.log(date.toString());
    setStartDate(date);
    return;
  };

  return endPoint !== "end" ? (
    <CalendarPicker onDateChange={onDateChange} selectedStartDate={startDate} />
  ) : (
    <CalendarPicker
      onDateChange={onDateChange}
      initialDate={startDate}
      minDate={startDate}
      selectedStartDate={startDate}
    />
  );
};

export default CalendarDate;
