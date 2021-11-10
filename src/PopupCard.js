import React from 'react'
import Button from '@mui/material/Button';
import './Popup.css'
export default function PopupCard(prop) {
    return  (prop.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button className="close-btn" onClick={()=> prop.setTriger(false)} >close</Button>
                {prop.children}
            </div>
            
        </div>
    ) : "";
}
