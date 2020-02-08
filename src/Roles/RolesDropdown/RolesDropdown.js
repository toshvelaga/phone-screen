import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const roles = [
  { label: "Sales", value: "Sales" },
  { label: "Marketing", value: "Marketing" },
  { label: "Engineering", value: "Engineering" },
  { label: "Tech Lead", value: "Tech" },
];

const Rolesdropdown = () => (
  <div style={{width: '400px'}}>
        <Select options={ roles } />
  </div>
);

export default Rolesdropdown