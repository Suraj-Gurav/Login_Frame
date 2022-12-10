import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/Routing';
//import Logic from "./Components/Logic"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>  
    </>    
  );
};

export default App;
