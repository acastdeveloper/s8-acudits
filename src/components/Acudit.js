import React, { Fragment, useState } from "react";

import axios from "axios";

import { emojify } from "react-emojione";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

const Acudit = () => {
  // XIST
  const [xist, setXist] = useState("");

  const xistejar = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setXist(res.data.value);
    });
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Acudit;
