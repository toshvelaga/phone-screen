import React from 'react'

const style = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    color: '#565656'
}

const Question = (props) => {
    return (<>
    <p style={style}>{props.question}</p>
    </>);
}
 
export default Question;