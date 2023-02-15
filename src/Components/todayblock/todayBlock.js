import {useState, useEffect} from "react";
import "./today.css"
import {API_URL} from "../../API";




const TodayBlock = () => { 
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [city, setCity] = useState("Krakow");
  useEffect(() => {
      const date = new Date();
      const day = date.toLocaleString("default", { weekday: "long" });
      const currentDate = date.toLocaleString();
      setCurrentDay(day);
      setCurrentDate(currentDate);
  }, [city]);

    return (
        <div className="todayBlock">
        <p className="today">{currentDay}</p>
        <p className="currentDate">{currentDate}</p>
        <p className="location">{city}</p>
      </div>
      );
}
 
export default TodayBlock;