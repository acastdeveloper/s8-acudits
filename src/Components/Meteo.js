import React, { Fragment, useState, useEffect } from "react";

import axios from "axios";

const Meteo = () => {
  // METEO
  const [temperatura, setTemperatura] = useState(0);
  const [lloc, setLloc] = useState("L'Hospitalet");
  const [humitat, setHumitat] = useState(0);
  const [confort, setConfort] = useState(0);
  const [descrip, setDescrip] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&lang=es&units=metric&appid=a0e6ac9e92dc18ce3cd493de048052d5"
      )
      .then((res) => {
        setTemperatura(res.data.main.temp);
        setLloc(res.data.name);
        setHumitat(res.data.main.humidity);
        setConfort(res.data.main.feels_like);
        setDescrip(res.data.weather[0].description);
      });
  }, []);

  return (
    <Fragment>
      <strong>{lloc}</strong>: Temperatura: {temperatura}ºC, Humedad: {humitat}
      %, (Temperatura de confort: {confort}ºC),{" "}
      <span className="capitalize">{descrip}</span>
    </Fragment>
  );
};

export default Meteo;
