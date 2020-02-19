import React from 'react'
import './Questioncard.css'

const Questioncard = (props) => {
    return (<div className="questioncard">
        {props.children}
    </div>);
}
 
export default Questioncard;