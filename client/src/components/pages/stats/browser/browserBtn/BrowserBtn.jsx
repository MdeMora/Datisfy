import React from 'react'
import './BrowserBtn.css'

const BrowserBtn = (props) =>{

    return(
        
        <div className="browserBtn" onClick={() => props.click(props.name)}>
            {props.name}
        </div>
    )
}

export default BrowserBtn;