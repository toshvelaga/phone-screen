import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const roles = [
  { label: "Sales", value: 1 },
  { label: "Marketing", value: 2 },
  { label: "Engineering", value: 3 },
  { label: "Tech Lead", value: 4 },
];

const Rolesdropdown = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ roles } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);

export default Rolesdropdown