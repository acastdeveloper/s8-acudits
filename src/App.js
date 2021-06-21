import React, { Fragment, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";


import Welcome from "./Welcome";
import Main from "./Main";

const App = () => {
  const [onOf, setOnOf] = useState(0);

  return (
    <Fragment>
      {onOf===0?(<Welcome isPushed={(n) => setOnOf(n)} />):(
        <Main/>
      )}
    </Fragment>
  );
};

export default App;
