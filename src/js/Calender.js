import React, { useState } from "react";
import "../css/styles.scss";
import CalenderContent from "./CalenderContent";
import Header from "./Header";

export const DateContext = React.createContext();

export default function Calender() {
  let [currDate, setCurrDate] = useState({
    day: 1,
    month: 0,
    year: 2021
  });
  let [selectedDate, setSelectedDate] = useState({
    day: -1,
    month: 0,
    year: 2021
  });

  return (
    <div className="calender-widget">
      <DateContext.Provider
        value={{ currDate, setCurrDate, selectedDate, setSelectedDate }}
      >
        <Header />
        <CalenderContent />
      </DateContext.Provider>
    </div>
  );
}
