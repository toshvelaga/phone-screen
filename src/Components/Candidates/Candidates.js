import React, { Component } from 'react';
import Newcandidates from './Newcandidates/Newcandidates'
import Searchbar from './Searchbar/Searchbar'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Candidatesdrop from './Candidatesdrop/Candidatesdrop';
import Candidatesmodal from './Candidatesmodal/Candidatesmodal';
import Candidateinfo from './Candidateinfo/Candidateinfo';
import axios from 'axios';

class Candidates extends Component {
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
        return (<>
            <h1 style={{marginBottom: '20px'}}>Candidates</h1>

            <div style={{display: 'flex',justifyContent: 'center'}}>
                <Candidatesdrop options={this.candidatesList()} /> 
                <Candidatesmodal />  
            </div>  
                <Candidateinfo First_Name="Steve" />
            </>);
    }
}
 
export default Candidates;

