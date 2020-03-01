import React, { Component } from 'react';
import Newcandidates from './Newcandidates/Newcandidates'
import Searchbar from './Searchbar/Searchbar'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Candidatesdrop from './Candidatesdrop/Candidatesdrop';
import Candidatesmodal from './Candidatesmodal/Candidatesmodal';
import Candidateinfo from './Candidateinfo/Candidateinfo'

class Candidates extends Component {
    state = {  }
    render() { 
        return (<>
            <h1 style={{marginBottom: '20px'}}>Candidates</h1>

            <div style={{display: 'flex',justifyContent: 'center'}}>
                <Candidatesdrop /> 
                <Candidatesmodal  />  
            </div>  
                <Candidateinfo First_Name="Steve" />
            </>);
    }
}
 
export default Candidates;

