import Dates from "./Dates";
import WeekDays from "./WeekDays";

export default function CalenderContent() {
  return (
    <div className="calender-content">
      <WeekDays />
      <Dates />
    </div>
  );
}
