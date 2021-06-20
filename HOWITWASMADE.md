# HOW IT WAS MADE

> TO MY ME FROM THE FUTURE. Dear me, from the future . This is the resolution of a set of exercices that depend ones each others because they are in a progressive sequence. Instructions of exercice are in README.md.

## EXERCICI01

- I create react project using yarn instead of npm (beacuse npm has being full of issues). 

`yarn create-app s8-acudits` in terminal.

- I create Main.js as compoment, on src folder.

- I comment all relative to App in index.js, on src folder. I keep App.js, App.css, App.text.js, logo.svg just for fund and remember how they was, but I'm not using them for more (not by de momment).

- I add `<Main/>` after the old `<App />` and `import Main from './Main';` after the old `import App from './App';`

- I edit Main to create static component with a title, without content and a button for "next joke". As it follows:

```jsx
import React from "react";
const Main = () => {
  return (
    <div>
      <header>
        <h3>El saben aquell que diu...</h3>
      </header>
      <section>...</section>
      <button>Següent Acudit</button>
    </div>
  );
};

export default Main;
```

- According to Exercise Statement now I must add interactivity. Everytime user clicks on the button it will be a joke loaded from an API. That means:
  
  - It must be connected with an APi. <mark>That's why we are using **axios **library</mark> (it exists also another one, fetch, that is native in react but it's said that axios is a little bit simpler). In order to use AXIOS library we previously must do:
    
    - Install AXIOS. I prefer use Yarn than NPM and that's why I do: `yarn add axios` in terminal.
    
    - Import axios to this component as follows: `import axios from 'axios';`
  
  - Every time that user clicks on the button it will be a **change **that consists in that another joke will be loaded. <mark>That's why we are using useState</mark> that is a "Hook" that helps us to define changes of State. In orther to use useState hook we previously must import it to the component where we are working. In that case thanks to the fact that this hook is already part of the react library we don't must install any library. But instead that we must declare that we are using it changing the React import statement as it follows:
    
    - `import React, {useState} from "react";`
      
      - It would be convenient to have used before this Hook separatedly to know how it must be used.
  
  - In no-place it's said that a joke must be loaded initially. Actually, the before *static creation component* statement it says that first time is loaded it must not be any joke. <mark>That's why we are NOT using useEffect hook</mark>.     

- Now we have prepared AXIOS and useState in order to be used. By the moment code remains as it follows:

```jsx
import React, {useState} from "react"; /* LOOK THIS */

import axios from "axios"; /* LOOK THIS */

const Main = () => {
  return (
    <div>
      <header>
        <h3>El saben aquell que diu...</h3>
      </header>
      <section>...</section>
      <button>Següent Acudit</button>
    </div>
  );
};

export default Main;
```

- <u>DEFINING DEFAULT STATE</u> with useState, ( But also CREATING THE VARIABLE THAT IS GOING TO CHANGE). It's required that initiallty must not be any joke yet. Therefore initial state is empty.
  
  - HOW:  `[xist, setXist] = useState("");`
  
  - WHERE: Inside the component and before the return statement. WHY INSIDE? Because it must be encapsulated in order to be reused with it's own state. WHY  BEFORE THE RETURN STATEMENT? We declare it before, and outside the return statement, In order to be used by the return statement. The code now remains as it follows (by the moment): 

```jsx
import React, { useState } from "react";

import axios from "axios";

const Main = () => {
  const [xist, setXist] = useState(""); /* LOOK THIS */

  return (
    <div>
      <header>
        <h3>El saben aquell que diu...</h3>
      </header>
      <section>...</section>
      <button>Següent Acudit</button>
    </div>
  );
};

export default Main;
```

- DECLARING THE FUNCTION THAT WILL FETCH THE JOKES FROM THE API, TO BE CALLED from the button.  (I'm not going to define the inside logic of the function yet. That's just a preparation).
  
  - WHERE: outside and before the return statement in order to be called by the return statement. 
  
  - HOW: As an arrow function like this: ` const xistejar = () => { };`
  
  - HOW THE FUNCTION WILL BE CALLED :   With an event onClick inside the button tag as it follows: `<button onClick={xistejar}>Següent Acudit</button>`

```jsx
import React, { useState } from "react";

import axios from "axios";

const Main = () => {
  const [xist, setXist] = useState("");

  const xistejar = () => {}; /* LOOK THIS */

  return (
    <div>
      <header>
        <h3>El saben aquell que diu...</h3>
      </header>
      <section>...</section>
      <button onClick={xistejar}>Següent Acudit</button> /* LOOK THIS */
    </div>
  );
};

export default Main;
```

- DEFINING THE FUNCTION'S INSIDE LOGIC.  
  
  - WHAT MUST DO THIS FUNCTION: The mission of this function is to update and change the joke getting another one everytime from an API. 
  
  - HOW IT WILL GET JOKES FROM THE API: Using AXIOS as it follows: 

```jsx
axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
        //console.log(res.data.value); 
        /* this is just an example of use */
      });
```

Explanation of every part of this:

- <mark>axios</mark>: to use of this library.

- .get('https://api.chucknorris.io/jokes/random') : to connect with the endpoint of the api and get the json object.

- <mark>.then( callback)</mark>: once axios has connected to the api asyncronously do the callback function inside rounded brackets, that in this case is: .then(<mark>(res) => {setXist(res.data.value);}</mark>);
  
  - WHAT THIS CALLBACK DOES: 
    
    - This callback function gets a parameter, that in this case is called <mark>res</mark> that is the object we've got from the Endpoint. 
    
    - It goes throw the object to get the joke that is in <mark>res.data.value</mark>.
    
    - It assigns this value(the joke) to the state of xist by doing: <mark>setXist(res.data.value);</mark> that whe had previously defined.

This is the final code for Exercici01.

```jsx
import React, { useState } from "react";

import axios from "axios";

const Main = () => {
  const [xist, setXist] = useState("");

  const xistejar = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
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
```

---

## EXERCICI02

We must do that before exercise looks like:

![](./img/acudit-disseny.png)

To get a similar look and feel we are going to need:

1. A background image 

2. Some extra-libraries:
   
   - A library to put emojis.
   
   - A library with predefined styles like cards, buttons etc.

### HOW HAVE I PUT THE BACKGROUND IMAGE

- I've added a a folder **assets** inside **src** with more folders inside: **css** and **img** where I've placed an stylesheet document *style.css* and a background image respectively. 

- And then i import the stylesheet in the component where we are working, in that case **Main.js**. I put it after the *import React... *statement as it follows: `import "./assets/css/style.css";`

### HOW I PUT THE EMOJI

We are using the library REACT-EMOJIONE following next steps:

- INSTALL by doing `yarn add react-emojione` in terminal. 

- IMPORT library to our component:

```jsx
import { emojify } from "react-emojione";
```

- PUT the shortcode in order to put the emoji-component at the place where must be rendered as it follows: 

```jsx
{emojify('^__^')}
```

[More info](https://npmjs.com/package/react-emojione)

### HOW TO STYLIZE WITH REACT-BOOTSTRAP

In order to get predefined styles like Bootstrap I will use a React library based on Bootstrap called React-Bootstrap. This library let us create components that has already Bootstrap styles assigned. To learn how to use React-Bootstrap you can go to its  [official page](https://react-bootstrap.github.io/). 

But I'll explain how to implement in our project. We must follow these steps:

- INSTALL REACT-BOOTSTRAP: `yarn add react-bootstrap` in terminal. 

- INSTALL BOOTSTRAP. `yarn add boostrap`in terminal.

- IMPORT REACT-BOOTSTRAP: We declare the import statements writing every component that we use in our component like Button, Card, Container, Col, Row, etc as it follows, for instance.

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
```

Now we must use the components in the return statement following the examples of the [official page](https://react-bootstrap.github.io/components/alerts/).

I change from that:

```jsx
return (
    <div>
      <header>
        <h3>El saben aquell que diu...{emojify('^__^')}</h3>
      </header>
      <section>{xist}</section>
      <button onClick={xistejar}>Següent Acudit</button>
    </div>
  );
```

To that: 

```jsx
return (
    <Card>
      <Card.Body>
      <Card.Title>
        <h3>El saben aquell que diu...{emojify('^__^')}</h3>
      </Card.Title>
      <Card.Text>{xist}</Card.Text>
      <Button onClick={xistejar} variant="primary">Següent Acudit</Button>
      </Card.Body>
    </Card>
  );
```

But we have a problem. Card is occuping the wide of the page. It doesn't look like the example we must imitate. We should ellaborate more the layout, using also the Bootstrap options **container**, **row**, **col**. Finally, after adding styles to style.css and changing this return statement code is as follows:

The stylesheet **styles.css** on the **assets/css** folder:

```css
body {
  background: linear-gradient(0deg, #ffffff33, #ffffffff),
    url("../img/man-laugh.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.fullSize {
  min-height: 80vh;
}

.botoncillu {
  background: lightseagreen !important;
}
```

And the return statement:

```jsx
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
```

For more info about how to install react-bootstrap and materialize-ui watch this video:

[![](http://img.youtube.com/vi/OYfKGT5AfZ0/0.jpg)](http://www.youtube.com/watch?v=OYfKGT5AfZ0 "")

---

## EXERCICI 03

The exercise statement requires that we consume a meteo APi and it must be shown when page is loaded, not by clicking in a button, that is why I use useEffect hook.

Finally the code for Main.js it will be as it follows:

```jsx
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

```

As we see this is not a very clean, reusable and optimized code. It's not  taking advantage of working with components with React. Since the begginning we could have separated funcionalities in independent components. 

I commit this as "***Exercici 03 - Nivell 3 - On the quirki mode of doing things***". But the next one step it will be refactorize all this code in a better mode. 
