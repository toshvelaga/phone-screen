import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

// react-bootstrap form docs: https://react-bootstrap.github.io/components/forms/

class Newcandidates extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
  
    //   this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    // handleInputChange(event) {
    //   const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
  
    //   this.setState({
    //     [name]: value
    //   });
    // }
  
    render() {
      return (<>
      <h1>New Candidates</h1>
<Form style={{width: '60%', margin: 'auto', marginTop: '50px', border: '1px solid #ccc', padding: '40px', borderRadius: '5px'}}>

    <Row>
        <Col>
        <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Control placeholder="Last name" />
        </Col>
    </Row>

    <Row style={{marginTop: '35px'}}>
        <Col>
        <Form.Group controlId="formGridEmail">
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formGridEmail">
        <Form.Control type="email" placeholder="Enter phone #" />
        </Form.Group>
        </Col>
    </Row>

  <Form.Group controlId="formGridAddress">
    <Form.Label>Address </Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Position </Form.Label>
    <Form.Control placeholder="Solutions Engineer" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  {/* <Button style={{width: '150px'}} variant="primary" type="submit">
    Submit
  </Button> */}
</Form>

<Button style={{width: '180px', marginTop: '30px'}} variant="primary" type="submit">
Submit
</Button>
</>

      );
    }
  }

export default Newcandidates;
