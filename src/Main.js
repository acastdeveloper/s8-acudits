import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./assets/css/style.css";

import Meteo from "./components/Meteo";
import Acudit from "./components/Acudit";

const Main = () => {
  return (
    <Container fluid>
      <Row className="theTop p-2">
        <Col>
          <Meteo></Meteo>
          {/*  */}
        </Col>
      </Row>
      <Row className="fullSize d-flex">
        <Col className="col-8 col-lg-6 col-xl-4 m-auto">
          <Acudit></Acudit>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
