//Le composant des stops
import { useEffect, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";

const Stops = ({ idDeparture }) => {
  const [nextStops, setNextStops] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios
        .get(
          `https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${idDeparture}`,
          {
            headers: {
              Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
            },
          }
        )
        .then((res) => {
          const stops = res.data.vehicle_journeys[0].stop_times.map(
            (stop) => stop.stop_point.name
          );
          setNextStops(stops);
        });
    };
    fetchDatas();
  }, [idDeparture]);
  return (
    <div className="departure__stops">
      <ul className="stops">
        {nextStops.map((stop, index) => (
          <li className="stops__station" key={stop}>
            {stop}
            <img
              src="/images/yellow.jpg"
              alt="yellow point"
              style={{
                display: `${index === nextStops.length - 1 ? "none" : "inline"}`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
Stops.propTypes = {
  idDeparture: propTypes.string.isRequired,
};

export default Stops;