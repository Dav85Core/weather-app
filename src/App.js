import Sun from './Assets/img/Sun.svg';
import Location from './Assets/img/Location.svg';
import './App.css';
import TodayBlock from './Components/todayblock/todayBlock';
import ConditionsBlock from './Components/conditionsBlock/conditionsBlock';
import Infoblock from './Components/infoblock/humidity';
import Wind from './Components/infoblock/wind';
import Precipitations from './Components/infoblock/precipitations';
import LightModeIcon from '@mui/icons-material/LightMode';
import Forecast from './Components/Forecast/forecast'

function App() {
  return (
   <div className="main">
    <div className="weather">
      <TodayBlock />
      <ConditionsBlock />
    </div>
    <div className="info">
      <div className="infoMargin">
        <div className="precipitationsBlock">
          <div className='statBlock'>
            <p className="stat">precipitations</p>
            </div>
          <div className='statBlock'>
            <p className="stat"><Precipitations /></p>
            </div>
        </div>
          <div className="humidityBlock">
            <div className="statBlock">
            <p className="stat">humidity</p>
            </div>
            <div className="statBlock">
            <Infoblock />
            </div>
          </div>
        <div className="windBlock">
          <div className="statBlock">
          <p className="stat">wind</p>
          </div>
          <div className="statBlock">
          <Wind />
          </div>
        </div>
        </div>
        <div className="forecastGroup">
        <Forecast />
        </div>
      {/* <div className="forecastGroup">
        
        <div className="forecastBlockOne">
          <div className="forecastIcon">
            <img className='foreIconOne' src={Sun} alt="" />
            <div className="day">
              <p className='foreDay'>Tue</p>
            </div>
            <div className="deg">
              <p className="foreDegree">30 C</p>
            </div>
          </div>
        </div>
        <div className="forecastBlock">
          <div className="forecastIcon">
            <img className='foreIcon' src={Sun} alt="" />
            <div className="day">
              <p className='foreDay'>Tue</p>
            </div>
            <div className="deg">
            <p className="foreDegree">30 C</p>
            </div>
          </div>
        </div>
        <div className="forecastBlock">
          <div className="forecastIcon">
            <img className='foreIcon' src={Sun} alt="" />
            <div className="day">
              <p className='foreDay'>Tue</p>
            </div>
            <div className="deg">
            <p className="foreDegree">30 C</p>
            </div>
          </div>
        </div>
        <div className="forecastBlock">
          <div className="forecastIcon">
            <img className='foreIcon' src={Sun} alt="" />
            <div className="day">
              <p className='foreDay'>Tue</p>
            </div>
            <div className="deg">
            <p className="foreDegree">30 C</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="locationButton">
        <button className="btn"><img src={Location} alt="" /> Change Location</button>
      </div>
    </div>
   </div>
  );
}

export default App;
