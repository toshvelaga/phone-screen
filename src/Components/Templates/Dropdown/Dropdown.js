import React, { Component } from 'react'
import Select from 'react-select'
import './Dropdown.css'

// Style component documentation: https://react-select.com/styles

class Dropdownselect extends Component {
    constructor(props) {
        super(props);
        this.state = {value: null};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(selectedItem) {
        this.setState({value: selectedItem.value});
        console.log(selectedItem.value)
    }

    options = [
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'engineering', label: 'Engineering' }
      ]
    
    styles = {
          width: '400px',
      }

    render() { 

        return (<>           
            <div style={this.styles}>
                <Select value={this.options.value} onChange={this.handleChange} options={this.options} />
            </div>
            </>
          ) 
    }
}
 
export default Dropdownselect;
