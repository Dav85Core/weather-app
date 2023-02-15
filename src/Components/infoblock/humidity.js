import "./humidity.css";
import {useState, useEffect} from "react";
import {API_URL} from "../../API";

const Humidity = () => {
  const [city, setCity] = useState("Krakow");
  const [humid, setHumid] = useState(0);
  useEffect(() =>{
  async function getHumidity() {
    const response = await fetch(`${API_URL}${city}`);
    const data = await response.json();
    console.log(data.main.humidity);
    const humidity = data.main.humidity;
    setHumid(humidity);
  }
  getHumidity();
},
     [city] )

    return (  
    <div>
      <p className="stat">{humid}%</p>
    </div>
    
  );
    }

 
export default Humidity;