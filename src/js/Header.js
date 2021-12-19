import { useContext } from "react";
import { months } from "../utils/constants";
import { DateContext } from "./Calender";

export default function Header() {
  const { currDate, setCurrDate } = useContext(DateContext);

  const arrowClickHandler = (direction) => {
    if (
      (currDate.month === 0 && direction === "left") ||
      (currDate.month === 11 && direction === "right")
    ) {
      return;
    }
    const tempDate = { ...currDate };
    setCurrDate({
      ...currDate,
      month: direction === "right" ? tempDate.month + 1 : tempDate.month - 1
    });
  };

  return (
    <div className="header">
      <span>{months[currDate.month] + " " + currDate.year}</span>
      <div className="arrowHeads">
        <span className="left" onClick={() => arrowClickHandler("left")}>
          &lt;
        </span>
        <span className="right" onClick={() => arrowClickHandler("right")}>
          &gt;
        </span>
      </div>
    </div>
  );
}
