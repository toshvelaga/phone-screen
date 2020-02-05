import React from 'react';
import '../Templates/Templates.css'
import '../Templates/Questions/SalesQuestions'
import Salesquestions from '../Templates/Questions/SalesQuestions';

const Templates = () => {
    return (<div>
        <h1>Templates</h1>
    <select>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
    </select>
        <Salesquestions/>
    </div>);
}
 
export default Templates;