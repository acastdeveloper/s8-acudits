import React, { useState } from "react";

import axios from "axios";

import { emojify } from "react-emojione";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import "./assets/css/style.css";

const Main = () => {
  const [xist, setXist] = useState("");

  const xistejar = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setXist(res.data.value);
    });
  };

  return (
    <Container fluid>
        <Row className="theTop p-2">
            The Weather...
        </Row>
      <Row className="fullSize d-flex">
        <Col className="col-8 col-lg-6 col-xl-4 m-auto" >
          <Card className="text-center shadow p-1 p-md-2 rounded">
            <Card.Body>
              <Card.Title>
                <h3>El saben aquell que diu...{emojify("^__^")}</h3>
              </Card.Title>
              <Card.Text>{xist}</Card.Text>
              <Button onClick={xistejar} variant="primary" className="botoncillu">
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
