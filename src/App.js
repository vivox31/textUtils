
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/navbar';
import TextForm from './components/textForm'
import React, { useState } from 'react'

// for react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // for  toggling between light mode and dark mode
  const [mode , setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Enabled dark mode' , 'success')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Enabled Light mode' , 'success')
    }
  }

  // for showing alerts
  const [alert,setAlert] = useState(null)
 
  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }



  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert ={showAlert} />
    <Alert alert={alert} />
    <div className="container">
    <Routes>
      <Route path='/about' element={<About mode={mode} />}></Route>
      <Route path='/' element={<TextForm heading= "Enter text to analyze" mode={mode} showAlert ={showAlert}/>}></Route>
    </Routes>  
    </div>
    </BrowserRouter>
    </>
   
  );
}
export default App;
