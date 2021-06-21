import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

import "./assets/css/style.css";

const Welcome = () => {
  const history = useHistory();

  const canviar = () => {
    history.replace("/acudits");
  };

  return (
    <Fragment>
      <Container fluid className="p-5">
        <Row>
          <Col>
            <Jumbotron>
              <h1>Benvingut/da/do Xiquet/a/o!</h1>
              <p>Estàs a punt d'entrar a un lloc si vols.</p>
              <p>
                <Button
                  variant="primary"
                  className="botoncillu"
                  onClick={canviar}
                >
                  Entrar
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Welcome;
