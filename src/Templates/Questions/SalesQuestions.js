import React from 'react';
import '../../Templates/Templates.css'
import Title from '../Questions/Titles/Titles' 
import Questioncard from '../Questions/Questioncard/Questioncard'

// Inspiration: https://business.linkedin.com/talent-solutions/blog/interview-questions/2017/12-interview-questions-to-ask-every-sales-candidate

const Salesquestions = () => {
    return (<>   
        <Questioncard>
            <Title name="Adaptability" /> 
            <p>1. Tell me about a time when you were asked to do something you had never done before. How did you react? What did you learn?</p>
            <p>2. How do you deal with change within an organization?</p>
            <p>3. Recall a time when you were assigned a task that you considered outside your job description? How did you handle the situation? What was the outcome?</p>
        </Questioncard>

        <Questioncard>
            <Title name="Culture Fit" />
            <p>4. What would make you choose our company over others?</p>
            <p>5. What’s the most interesting thing about you that’s not on your resume?</p>
            <p>6. Tell me about a time when you worked with your teammates to close a deal.</p>
        </Questioncard>

        <Questioncard>
            <Title name="Growth" />
            <p>7. Recall a time from your work experience when your manager or supervisor was unavailable when a problem arose. How did you handle that situation? With whom did you consult?</p>
            <p>8. Can you describe a time that you volunteered to expand your knowledge at work, as opposed to being directed to do so?</p>
            <p>9. What would motivate you to make a move from your current role?</p>
        </Questioncard>

        <Questioncard>
            <Title name="Motivation" />
            <p>10. Can you tell me about a sale you recently made that you believed followed the perfect process?</p>
            <p>11. Can you describe a time that you volunteered to expand your knowledge at work, as opposed to being directed to do so?</p>
            <p>12. What would motivate you to make a move from your current role?</p>
        </Questioncard>
        </>
        
    );
}
 
export default Salesquestions;