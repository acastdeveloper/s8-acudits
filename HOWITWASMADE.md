# HOW IT WAS MADE

> TO MY ME FROM THE FUTURE. Dear me, from the future . This is the resolution of a set of exercices that depend ones each others because they are in a progressive sequence. Instructions of exercice are in README.md.

## EXERCICI01

- I create react project using yarn instead of npm (beacuse npm has being full of issues). 

`yarn create-app s8-acudits` in terminal.

- I create Main.js as compoment, on src folder.

- I comment all relative to App in index.js, on src folder. I keep App.js, App.css, App.text.js, logo.svg just for fund and remember how they was, but I'm not using them for more (not by de momment).

- I add `<Main/>` after the old `<App />` and `import Main from './Main';` after the old `import App from './App';`

-  I edit Main to create static component with a title, without content and a button for "next joke". As it follows:

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
