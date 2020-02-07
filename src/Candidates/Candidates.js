import React from 'react'
import Newcandidates from '../Candidates/Newcandidates/Newcandidates'
import Searchbar from './Searchbar/Searchbar'

const Candidates = () => {
    return (<>
        <h1>Candidates</h1>

        <p>Search Bar for Candidates | + Add Candidate</p>
        <div style={{margin: 'auto', width: '70%'}}>
        <Searchbar />
        </div>
        <br></br>
        <div style={{width: '450px', height: '300px', border: '1px solid #ccc', margin: 'auto'}}>Hello</div>
        {/* <Newcandidates /> */}

    </>);
}
 
export default Candidates;