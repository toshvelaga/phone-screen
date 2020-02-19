import React from 'react';
import './Templates.css'
import Dropdownselect from './Dropdown/Dropdown';
import Templatesmodal from './Templatesmodal/Templatesmodal';
import Textarea from './Questions/Textarea/Textarea';
import Samplequestions from './Questions/Samplequestions/Samplequestions'

const Templates = () => {
    return (<div>
        <h1>Templates</h1>

        <div style={{display: 'flex',justifyContent: 'center'}}>
            <Dropdownselect />
            <Templatesmodal />
        </div>
        <Samplequestions />
    </div>);
}
 
export default Templates;