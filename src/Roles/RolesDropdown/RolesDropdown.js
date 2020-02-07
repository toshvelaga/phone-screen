import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const roles = [
  { label: "Sales", value: "Sales" },
  { label: "Marketing", value: "Marketing" },
  { label: "Engineering", value: "Engineering" },
  { label: "Tech Lead", value: "Tech Lead" },
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