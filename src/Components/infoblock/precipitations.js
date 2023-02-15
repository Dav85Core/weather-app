// import "./precipitations.css";
import {useState, useEffect} from "react";
import {API_URL} from "../../API";

const Precipitations = () => {
    const [city, setCity] = useState("Krakow");
    const [rain, setRain] = useState(0);
    useEffect(() =>{
    async function getPrecipitations() {
      const response = await fetch(`${API_URL}${city}`);
      const data = await response.json();
      console.log(data.rain);
      const pioggia = data.rain; 
    //   const pioggia = data.;
    //   setWind(vento)
        setRain(pioggia); 
        if(rain === undefined){
            setRain("0");
        }
    }
    getPrecipitations();
  },
       [city] )
  
      return (  
      <div>
        <p className="stat">{rain}</p>
      </div>
    );
      }
  
   
  export default Precipitations;