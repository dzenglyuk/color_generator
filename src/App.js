import React, { useState } from "react";
import Values from "values.js";

import Form from "./components/Form";
import ColorsContainer from "./components/ColorsContainer";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  } 
  
  const handleChange = (event) => setColor(event.target.value);

  return (
    <React.Fragment>
      <Form color={color} error={error} onSubmit={handleSubmit} onChange={handleChange} />
      <ColorsContainer list={list}/>
    </React.Fragment>
  );
}

export default App;
