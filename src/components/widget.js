import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../actions";

function getDirection(angle) {
  var directions = [
    'Nord',
    'Nordvest',
    'Vest',
    'Sydvest',
    'Syd',
    'Sydøst',
    'Øst',
    'Nordøst',
  ];
  return directions[
    Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
  ];
}

const Widget = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const city = useSelector(state => state.data.name);
  const { temp, humidity } = useSelector(state => state.data.main);
  const { speed, deg } = useSelector(state => state.data.wind);
  return (
    <div className="widget" style={{ margin: "10px", width: "300px"}}>
    <div className="panel panel-info">
      <div className="panel-heading">Weather in <b>{city}</b></div>
      <ul className="list-group">
        <li className="list-group-item">Temperature: <b>{Math.round(temp)}°C</b></li>
        <li className="list-group-item">Humidity: <b>{humidity}</b></li>
        <li className="list-group-item">Wind: <b>{Math.round(speed)} m/s {getDirection(deg)}</b></li>
        <li className="list-group-item">
            <div className="form-inline">
              <div className="form-group">
                <input type="text" value={value} onChange={e => setValue(e.target.value)} className="form-control" id="city" placeholder="City" />
              </div>
              <button onClick={() => dispatch(fetchWeather(value))} className="btn btn-default">Search</button>
            </div>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Widget;