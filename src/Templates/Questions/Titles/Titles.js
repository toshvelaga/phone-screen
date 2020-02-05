import React from 'react';

// color schemes: https://www.schemecolor.com/select-me.php

const titlestyle = 
{
    textAlign: 'center', 
    width: '20%', 
    margin: 'auto', 
    paddingTop: '.5em', 
    paddingBottom: '.5em',
    // borderRadius: '.75rem',
    color: 'white',
    background: '#0AAEF1'
}

// const blueBackground = {
//     background: '#59b6ae',
// }

// const purpleBackground = {
//     background: '#4d3771',
// }

// const redBackground = {
//     background: '#ec6364',
// }

// const yellowBackground = {
//     background: '#ffdb68',
// }

export const Title = (props) => {
    return (<div><h4 style={titlestyle}>{props.name}</h4></div>
    );
}
 
export default Title;