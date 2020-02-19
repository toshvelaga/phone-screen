import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Candidatesdrop from '../Candidatesdrop/Candidatesdrop';
import RolesDropdown from '../../Roles/RolesDropdown/RolesDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

// react-bootstrap form docs: https://react-bootstrap.github.io/components/forms/

class Newcandidates extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
  
    //   this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    render() {
      return (<>
      <Form style={{width: '60%', padding: '40px', borderRadius: '5px'}}>

          <Row>
              <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="" />
              </Col>
              <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="" />
              </Col>
          </Row>

          <Row style={{marginTop: '25px'}}>
              <Col>
              <Form.Label>Email</Form.Label>
              <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="" />
              </Form.Group>
              </Col>
              <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="" />
              </Form.Group>
              </Col>
          </Row>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Position</Form.Label>
          <RolesDropdown />
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

        {/* Add upload resume/cv */}

      </Form>

</>

      );
    }
  }

export default Newcandidates;
