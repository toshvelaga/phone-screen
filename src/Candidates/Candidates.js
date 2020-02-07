import React from 'react'
import Newcandidates from '../Candidates/Newcandidates/Newcandidates'
import Searchbar from './Searchbar/Searchbar'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Candidates = () => {
    return (<>
        <h1>Candidates</h1>

        <p>Search Bar for Candidates | + Add Candidate</p>
        <div style={{margin: 'auto', width: '70%'}}>
        <Searchbar />
        </div>

        <Link to='/newcandidates'>
        <Button style={{width: '180px', marginTop: '30px'}} variant="outline-primary" type="submit">Add Candidate</Button>
        </Link>
        <br></br>
        <div style={{width: '450px', height: '300px', border: '1px solid #ccc', margin: 'auto'}}>Hello</div>
        {/* <Newcandidates /> */}

    </>);
}
 
export default Candidates;