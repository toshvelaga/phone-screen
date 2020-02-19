import React from 'react';
import Textarea from '../Textarea/Textarea';
import Question from '../Question/Question';

const style = {
    textAlign: 'left', 
    margin: 'auto', 
    width: '50%', 
    marginTop: '25px'}

const Samplequestions = (props) => {
    return (<>
        <div style={style}>
            <Question question="1) Would you hire this employee?" />
            <Textarea />
        </div>

        <div style={style}>
            <Question question="2) Did this employee have the right qualifications?" />
            <Textarea />
        </div>

        <div style={style}>
            <Question question="3) Would they be a good addition to our culutre?" />
            <Textarea />
        </div>

        <div style={style}>
            <Question question="4) Any red flags or areas I should dig a little deeper in?" />
            <Textarea />
        </div>

        <div style={style}>
            <Question question="5) Anything else you'd like to share?" />
            <Textarea />
        </div>

    </>);
}
 
export default Samplequestions;