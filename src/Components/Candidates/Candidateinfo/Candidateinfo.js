import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Candidatesdrop from '../Candidatesdrop/Candidatesdrop';
import RolesDropdown from '../../Roles/RolesDropdown/RolesDropdown';

const Candidateinfo = (props) => {

    const styles = {
        marginTop: '25px',
        border: '1px solid #ccc',
        width: '50%',
        padding: '20px',
        borderRadius: '5px',
        overflowY: 'scroll'

    }

    return (
    <>
        <div className="container" style={styles}>

        <Form style={{width: '100%', padding: '40px', borderRadius: '5px', margin: 'auto'}}>
        <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control readOnly placeholder={props.First_Name} />
            </Col>
            <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control readOnly placeholder={props.Last_Name} />
            </Col>
        </Row>

        <Row style={{marginTop: '25px'}}>
            <Col>
            <Form.Label>Email</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly type="email" placeholder={props.Email} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Label>Phone</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly placeholder={props.Phone} />
            </Form.Group>
            </Col>
        </Row>

        <Row style={{marginTop: '25px'}}>
            <Col>
            <Form.Label>Position</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly placeholder={props.Position} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Label>Date Intervied</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control readOnly placeholder={props.Date} />
            </Form.Group>
            </Col>
        </Row>

        <Form.Row style={{marginTop: '25px'}}>
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control readOnly placeholder={props.City}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control readOnly placeholder={props.State} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control readOnly placeholder={props.Zip} />
        </Form.Group>
        </Form.Row>

        <Row style={{marginTop: '50px'}}>
            <Col>
            <Form.Group>
                <Button style={{width: '100%'}}>Edit</Button>
            </Form.Group>
            </Col>
        </Row>

        {/* Add upload resume/cv */}

        </Form>

        </div>
    </>
    );
}
 
export default Candidateinfo;