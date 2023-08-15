// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2c2c";
      showalert("Dark Mode has been enabled", "success");
      // document.title = "TextManipulator - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
      // document.title = "TextManipulator - Light Mode";
    }
  };
  return (
    <>
    <HashRouter>
      <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
      
      <Routes>
      <Route exact path="/about" element={<About  mode={mode}/>}></Route>
        <Route exact path="/" element={
    <TextForm  showalert={showalert} heading="Try TextManipulator - Word Counter, Character Counter" 
        mode={mode}/>
         }> </Route>
      </Routes>

   
      </div>
    </HashRouter>
    </>
  );
}

export default App;
