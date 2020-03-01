import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Candidatesdrop extends Component {
  state = { 
    candidates: [],
  }

  componentDidMount() {
    axios.get('http://localhost:4000/candidates')
        .then(res => {
            this.setState({ candidates: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  candidatesList() {
    return this.state.candidates.map(candidate => ({
      label: candidate.First_Name + ' ' + candidate.Last_Name, value: candidate.First_Name + ' ' + candidate.Last_Name, id: candidate._id
    }))
  }

  render() { 

    const people = this.candidatesList()
    console.log(this.state.candidates)

    return (
      <div style={{width: '400px'}}>
        <Select options={ people } />
      </div>
   );
  }
}
 
export default Candidatesdrop;


