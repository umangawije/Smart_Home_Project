import { useState } from 'react'
import './App.css'
import Header from './componenets/header/header';
import profileImg from "./assets/profile.jpeg"

function App() {
  

  return (
    <div className='App'>
      <div className='sidebar' ></div>
      <div className='widget'></div>
      <div className='home'>
        <Header/> {/*react componenet for header*/}
      </div>
    </div>
      
  );
}

export default App