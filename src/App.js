import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggelmode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>
    <Navbar mode={mode} toggelMode={toggelmode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the Text To Analyze Below"mode={mode} />
    </div>

    </>
  );
}

export default App;
