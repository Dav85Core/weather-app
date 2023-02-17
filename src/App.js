import Sun from "./Assets/img/Sun.svg";
import Location from "./Assets/img/Location.svg";
import "./App.css";
import CurrentData from "./Components/CurrentData/currentData";
import CurrentConditions from "./Components/CurrentConditions/currentConditions";
import CurrentInfo from "./Components/CurrentInfo/currentInfo";
import LightModeIcon from "@mui/icons-material/LightMode";
import Forecast from "./Components/Forecast/forecast";

function App() {
  return (
    <div className="main">
      <div className="weather">
        <CurrentData />
        <CurrentConditions />
      </div>
      <div className="info">
        <CurrentInfo />

        <Forecast />
        <div className="locationButton">
          <button className="btn">
            <img src={Location} alt="" /> Change Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
