import React from 'react'
import './BrowserBtn.css'

const BrowserBtn = (props) =>{
    // console.log(category,price,stocked,name)
    console.log(props)
    return(
        
        <div className="browserBtn" onClick={() => props.click(props.name)}>
            {props.name}
        </div>
    )
}

export default BrowserBtn;