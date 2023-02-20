import React from "react";
// import '../styles/App.css';
const App = () => {
  const handleInput = (event) => {
    // use console.log
    console.log(`Input in #${event.target.id} is ${event.target.value}`);
    // #text-input is sfdfg
    // #num-input is 83247
  };

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input id="text-input" onChange={handleInput} type={"text"} />
      <br />
      <br />
      <label htmlFor="num-input">Number input</label>
      <input id="num-input" onChange={handleInput} type={"number"} />
      <br />
    </div>
  );
};

export default App;

/*import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
   // use console.log
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} />
      <br/>
    </div>
  )
}


export default App;*/
