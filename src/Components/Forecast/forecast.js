import React, { useState, useEffect } from 'react';
import {APITWO} from "../../API";

// const Forecast = ()=>{

    // const [forecast, setForecast] = useState([]);
    // const APITWO = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;

//     useEffect(() => {
//         fetch(API_URL)
//           .then(response => response.json())
//           .then(data => {
//             console.log(data);
//             // setForecast(data.list);
//           });
//       }, []);

//    return(

//    );
// }
const Forecast = () => {
    const [forecast, setForecast] = useState([]);
    

    useEffect(() => {
      fetch(APITWO)
        .then(response => response.json())
        .then(data => {
          console.log(data.list);
          const forecast = data.list.filter((item, index) => index % 8 === 0);
          const days = forecast.map((item) => ({
            ...item,
            weekday: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' }),
            
          }));
          const filterToDays = days.filter((item, index) => index > 0 && index <= 4)
          setForecast(filterToDays);
        });
    }, []);
  
    return (
        <div>
       
        { 
          
        forecast.map(data => (
         
          
           <div className='forecastBlock' key={data.dtx}>
            <div className="day">
            <p className='foreDay'>Date: {data.weekday}</p>
            </div>
            <div className="deg">
            <p className='foreDegree'>Temperature: {data.main.temp}</p>
            </div>
            {/* <p>Humidity: {data.main.humidity}</p> */}
            {/* <p>Weather: {data.weather[0].description}</p> */}
          
          </div>
         
))} 
      </div>  
     
    );
  };
export default Forecast