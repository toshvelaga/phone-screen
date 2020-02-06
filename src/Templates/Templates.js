import React from 'react';
import '../Templates/Templates.css'
import './Questions/Salesquestions'
import Salesquestions from './Questions/Salesquestions';
import Dropdownselect from '../Templates/Dropdown/Dropdown';

const Templates = () => {
    return (<div>
        <h1>Templates</h1>
    {/* <select>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
    </select> */}
        <Dropdownselect />
        {/* <Salesquestions/> */}
    </div>);
}
 
export default Templates;