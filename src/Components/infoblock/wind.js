import "./wind.css";
import {useState, useEffect} from "react";
import {API_URL} from "../../API";

const Wind = () => {
    const [city, setCity] = useState("Krakow");
    const [wind, setWind] = useState(0);
    useEffect(() =>{
    async function getWind() {
      const response = await fetch(`${API_URL}${city}`);
      const data = await response.json();
      console.log(data.wind.speed);
      const vento = data.wind.speed;
      setWind(vento)
      
    }
    getWind();
  },
       [city] )
  
      return (  
      <div>
        <p className="stat">{wind}</p>
      </div>
      
    );
      }
  
   
  export default Wind;