import { DateContext } from "./Calender";
import { useContext } from "react";

export default function Dates() {
  let dates = [];
  for (let i = 1; i <= 28; i++) {
    dates.push(i);
  }

  const { currDate, selectedDate, setSelectedDate } = useContext(DateContext);

  const isSelectedDate = (d) => {
    const selected = new Date(
      selectedDate.year,
      selectedDate.month,
      selectedDate.day
    );
    const curr = new Date(currDate.year, currDate.month, d);

    if (selected.getTime() === curr.getTime()) {
      return true;
    }
    return false;
  };

  const dateClickHandler = (d) => {
    setSelectedDate({ ...currDate, day: d });
  };

  return (
    <div className="dates">
      {dates.map((d) => (
        <li
          key={d}
          className={isSelectedDate(d) ? "current-date" : ""}
          onClick={() => dateClickHandler(d)}
        >
          {d}
        </li>
      ))}
    </div>
  );
}
