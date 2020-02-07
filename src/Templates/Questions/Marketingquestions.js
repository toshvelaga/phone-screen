import React from 'react';
import '../../Templates/Templates.css'
import Title from './Titles/Titles' 
import Questioncard from './Questioncard/Questioncard'

// https://www.indeed.com/hire/interview-questions/marketing

const Marketingquestions = () => {
    return (<>
        <Questioncard>
            <Title name="Innovation" />
            <p>1) What is an innovative new marketing strategy that you'd like to implement while in this position?</p>
            <p>2) What do you think is an underappreciated marketing channel and why?</p>
            <p>3) You have been charged with the task of creating a new branding campaign for a product that hasn't been doing well. What is your process?</p>
        </Questioncard>
    </>);
}
 
export default Marketingquestions;