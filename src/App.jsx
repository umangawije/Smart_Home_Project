import { useState } from 'react'
import './App.css'
import Header from './componenets/header/header';
import DeviceCard from './componenets/device_card/device_card';
import profileImg from "./assets/profile.jpeg"

function App() {
  const devices = [
    {image:"", name:"Main Light"},
    {image:"", name:"Ceiling Fan"},
    {image:"", name:"Night Light"},
    {image:"", name:"CCTV"},
  ];

  return (
    <div className='App'>
      <div className='sidebar' ></div>
      <div className='widget'></div>
      <div className='home'>
        <Header/> {/*react componenet for header*/}
        <div className='device_section'>
          <h1 className='devices_section_heading'>Devices</h1>
          <div className='device_container'>
            {devices.map((device,i) => {
              return <DeviceCard key={i} image={device.image} name={device.name}/>
            })}
            
                  
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default App