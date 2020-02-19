import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Candidatesdrop from '../Candidatesdrop/Candidatesdrop';
import RolesDropdown from '../../Roles/RolesDropdown/RolesDropdown';

const Candidateinfo = () => {

    const styles = {
        marginTop: '25px',
        border: '1px solid #ccc',
        width: '50%',
        padding: '20px',
        borderRadius: '5px',
        overflowY: 'scroll'

    }

    return (<>
        <div className="container" style={styles}>

        <Form style={{width: '100%', padding: '40px', borderRadius: '5px', margin: 'auto'}}>

        <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control readOnly placeholder="Steve" />
            </Col>
            <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control readOnly placeholder="Smith" />
            </Col>
        </Row>

        <Row style={{marginTop: '25px'}}>
            <Col>
            <Form.Label>Email</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly type="email" placeholder="stevesmith@gmail.com" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Label>Phone</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly placeholder="628-529-7700" />
            </Form.Group>
            </Col>
        </Row>

        <Row style={{marginTop: '25px'}}>
            <Col>
            <Form.Label>Position</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly placeholder="Sales" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Label>Date Intervied</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly placeholder="2/08/2020" />
            </Form.Group>
            </Col>
        </Row>

        <Form.Row style={{marginTop: '25px'}}>
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control readOnly placeholder="San Francisco"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control readOnly placeholder="CA" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control readOnly placeholder="94127" />
        </Form.Group>
        </Form.Row>

        {/* Add upload resume/cv */}

        </Form>

        </div>
    </>);
}
 
export default Candidateinfo;