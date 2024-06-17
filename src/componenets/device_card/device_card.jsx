import { PowerIcon } from "@heroicons/react/16/solid";
import s from "./device-card.module.css"
import { useState } from "react";

function DeviceCard(props){

  const [isOn, setIsOn] = useState(false);
  const state = isOn ? "ON" : "OFF"

  const handleClick = () => {
    setIsOn(!isOn)
  }

    return(
        <div className={s.device_card}>
        <img className={s.device_card} src={props.image} alt="" />
        <div className={s.device_card_info}>
          <div className={s.device_card_info_container}>
            <h3 className={s.device_card_text}>{props.name}</h3>
            
            <button 
              type="button" 
              onClick={handleClick}
              className={isOn ? s.device_card_icon_on : s.device_card_icon_off}
            >
                <PowerIcon width={36} height={36}/>
            </button>
          </div>
        </div>
      </div>

    )
}

export default DeviceCard;