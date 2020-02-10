import React from 'react';
import '../Templates/Templates.css'
import Dropdownselect from '../Templates/Dropdown/Dropdown';
import Templatesmodal from '../Templates/Templatesmodal/Templatesmodal';
import Textarea from '../Templates/Questions/Textarea/Textarea';
import Samplequestions from '../Templates/Questions/Samplequestions/Samplequestions'

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