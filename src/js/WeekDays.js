import { weekdays } from "../utils/constants";

export default function WeekDays() {
  return (
    <div className="weekdays">
      {weekdays.map((d, i) => (
        <li key={d + "" + i}>{d}</li>
      ))}
    </div>
  );
}
