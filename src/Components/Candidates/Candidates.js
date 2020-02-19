import React from 'react'
import Newcandidates from './Newcandidates/Newcandidates'
import Searchbar from './Searchbar/Searchbar'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Candidatesdrop from './Candidatesdrop/Candidatesdrop';
import Candidatesmodal from './Candidatesmodal/Candidatesmodal';
import Candidateinfo from './Candidateinfo/Candidateinfo'

const Candidates = () => {
    return (<>
            <h1 style={{marginBottom: '20px'}}>Candidates</h1>

            <div style={{display: 'flex',justifyContent: 'center'}}>
                <Candidatesdrop /> 
                <Candidatesmodal  />  
            </div>  
                <Candidateinfo />
            </>);
}
 
export default Candidates;