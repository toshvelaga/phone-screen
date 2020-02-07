import React from 'react';

const Interviews = () => {
    return (<>
    <h1>Interviews</h1>
        <p>Would you hire this employee? Why?</p>
        <input type="text" name="name" style={{width:'35%', height: '75px'}} />
        <p>Did this employee have the right qualifications?</p>
        <input type="text" name="name" style={{width:'35%', height: '75px'}} />
        <p>Would they be a good addition to our culutre?</p>
        <input type="text" name="name" style={{width:'35%', height: '75px'}} />
        <p>Any red flags or areas I should dig a little deeper in?</p>
        <input type="text" name="name" style={{width:'35%', height: '75px'}} />
        <p>Anything else you'd like to share?</p>
        <input type="text" name="name" style={{width:'35%', height: '75px', marginBottom: '50px'}} />
        <br></br>
        <button style={{margin: 'auto', marginBottom: '50px'}}>Submit</button>
        </>);
}
 
export default Interviews;