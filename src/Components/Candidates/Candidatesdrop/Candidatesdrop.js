import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const people = [
  { label: "Steve Smith", value: "Steve Smith" },
  { label: "Barry Smith", value: "Barry Smith" },
  { label: "Lisa Manelli", value: "Lisa Manelli" },
  { label: "Rick Goldstein", value: "Rick Goldstein" },
];

const Candidatesdrop = () => (
  <div style={{width: '400px'}}>
        <Select options={ people } />
  </div>
);

export default Candidatesdrop;