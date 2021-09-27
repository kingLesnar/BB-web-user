import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Signin from "./Components/Signin";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <div className='App'>
      <Signin />
    </div>
  );
}

export default App;
