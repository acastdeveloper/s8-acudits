import React, { useState } from "react";

import axios from "axios";

const Main = () => {
  const [xist, setXist] = useState("");

  const xistejar = () => {
    axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
        setXist(res.data.value);
      });
  };

  return (
    <div>
      <header>
        <h3>El saben aquell que diu...</h3>
      </header>
      <section>{xist}</section>
      <button onClick={xistejar}>Següent Acudit</button>
    </div>
  );
};

export default Main;
