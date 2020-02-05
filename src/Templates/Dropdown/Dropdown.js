import React, { Component } from 'react'
import Select from 'react-select'
import './Dropdown.css'

// Style component documentation: https://react-select.com/styles

const options = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' }
  ]

  const styles = {
      width: '200px',
      margin: 'auto'
  }
  
  const Dropdownselect = () => (
    <div style={styles}>
        <Select options={options} />
    </div>
  )

export default Dropdownselect;