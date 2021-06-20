import React, { useState, useEffect } from "react";

import axios from "axios";

import { emojify } from "react-emojione";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import "./assets/css/style.css";

const Main = () => {
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

  // XIST
  const [xist, setXist] = useState("");

  const xistejar = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setXist(res.data.value);
    });
  };

  return (
    <Container fluid>
      <Row className="theTop p-2">
        <Col>
          <strong>{lloc}</strong>: Temperatura: {temperatura}ºC, Humedad:{" "}
          {humitat}%, (Temperatura de confort: {confort}ºC),{" "}
          <span className="capitalize">{descrip}</span>
        </Col>
      </Row>
      <Row className="fullSize d-flex">
        <Col className="col-8 col-lg-6 col-xl-4 m-auto">
          <Card className="text-center shadow p-1 p-md-2 rounded">
            <Card.Body>
              <Card.Title>
                <h3>El saben aquell que diu...{emojify("^__^")}</h3>
              </Card.Title>
              <Card.Text>{xist}</Card.Text>
              <Button
                onClick={xistejar}
                variant="primary"
                className="botoncillu"
              >
                Següent Acudit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
