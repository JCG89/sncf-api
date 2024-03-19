import { useState } from "react";
import Departures from "./Departures";

const TrainStation = () => {
  const [departureMode, setDepartureMode] = useState(true);
  return (
    <div className="train-station">
      <div className="directions">
        <button
          type="button"
          className={`directions__departures 
          ${departureMode ? 'directions__departures--active' : ''}`}
          onClick={()=>setDepartureMode(true)}
          onKeyPress={()=>setDepartureMode(true)}
        >
          Départs
        </button>
        <button
          type="button"
          className={`directions__arrivals ${departureMode?'':'directions__arrivals--active'}`}
          onClick={()=>setDepartureMode(false)}
          onKeyPress={()=>setDepartureMode(false)}
        >
          Arrivés
        </button>
      </div>
      {departureMode && <Departures />}
    </div>
  );
};

export default TrainStation;
