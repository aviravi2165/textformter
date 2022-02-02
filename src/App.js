import './App.css';
import { Navbar } from "./components/Navbar";
import { FormText } from "./components/FormText";
import { About } from "./components/About";
import React,{useState} from 'react';
import { Alert } from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
       setAlert(null);
    }, 2000);
  }
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
      console.log(cls);
      console.log('toggle mode')
      removeBodyClasses();
      document.body.classList.add('bg-'+cls)
      if(mode === 'light') {
          document.body.style.backgroundColor = '#042743';
          setMode('dark');
          showAlert("Dark mode enable successfully","success")
      } else {
          document.body.style.backgroundColor = 'white';
          setMode('light');
          showAlert("Light mode enable successfully","success")
      }
  } 
  return (
    <>
      <Router>
        <Navbar title="Texttutle" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <FormText showAlert={showAlert} mode={mode} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>    
    </>
  );
}

export default App;
