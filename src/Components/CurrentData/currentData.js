import {useState, useEffect} from "react";
import "./current.css"
import {location} from "../../API";


const CurrentData = () => { 
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
      const date = new Date();
      const day = date.toLocaleString("default", { weekday: "long" });
      const currentDate = date.toLocaleString();
      setCurrentDay(day);
      setCurrentDate(currentDate);
  }, [location]);

    return (
        <div className="todayBlock">
        <p className="today">{currentDay}</p>
        <p className="currentDate">{currentDate}</p>
        <p className="location">{location}</p>
      </div>
      );
}
 
export default CurrentData;