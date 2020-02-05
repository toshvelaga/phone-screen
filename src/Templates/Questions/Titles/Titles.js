import React from 'react';

const titlestyle = 
{
    textAlign: 'center', 
    width: '30%', 
    margin: 'auto', 
    paddingTop: '.5em', 
    paddingBottom: '.5em',
    borderRadius: '1rem',
    color: 'white'
}

const blueBackground = {
    background: '#59b6ae',
}

const purpleBackground = {
    background: '#4d3771',
}

const redBackground = {
    background: '#ec6364',
}

const yellowBackground = {
    background: '#ffdb68',
}

export const Title = () => {
    return (<div><h4 style={{...titlestyle,...blueBackground}}>Adaptability</h4></div>
    );
}

export const CultureFit = () => {
    return (<div><h4 style={{...titlestyle,...purpleBackground}}>Culture Fit</h4></div>);
}

export const Growth = () => {
    return (<div><h4 style={{...titlestyle,...redBackground}}>Growth Potential</h4></div>);
}

export const Motivation = () => {
    return (<div><h4 style={{...titlestyle,...yellowBackground}}>Motivation</h4></div>);
}
 
export default Title;