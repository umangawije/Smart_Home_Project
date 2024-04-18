import { useState } from 'react'
import './App.css'
import Header from './componenets/header/header';
import DeviceCard from './componenets/device_card/device_card';
import profileImg from "./assets/profile.jpeg"

function App() {
  

  return (
    <div className='App'>
      <div className='sidebar' ></div>
      <div className='widget'></div>
      <div className='home'>
        <Header/> {/*react componenet for header*/}
        <div className='device_section'>
          <h1 className='devices_section_heading'>Devices</h1>
          <div className='device_container'>
            <DeviceCard name="Main Light"/>  {/*react componenet for device card*/}
            <DeviceCard name="Ceiling Fan"/>
            <DeviceCard name="Night Light"/>
            <DeviceCard name="CCTV"/> 
                  
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default App