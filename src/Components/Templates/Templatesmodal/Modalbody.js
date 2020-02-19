import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Question from '../Questions/Question/Question';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Modalbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: ['What made you decide to apply to us?'],
            question: '',
        };
        this.AddQuestion = this.AddQuestion.bind(this);
        this.RemoveQuestion = this.RemoveQuestion.bind(this);
    }

    AddQuestion = () => {
        this.setState(prevState => ({
          questions: [...prevState.questions, this.state.question]
        }));
    };

    RemoveQuestion = () => {
        // const questions = this.state.questions.filter(question => Row.key !== keys );
        // this.setState({ questions: questions })
        alert("need to remove item on Click")
    }

    styles = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '7.5px',
        color: '#565656',
        // marginRight: '10px'
    }

    render() { 

        const questionslist = this.state.questions.map((question) => 
            <Row key={new Date().valueOf()}>
                <Col sm={10}>
                <p style={this.styles}>{question}</p>
                </Col>
                <Col sm={2}>
                <Button onClick={this.RemoveQuestion} style={{marginLeft: '-10px', marginBottom: '20px', paddingLeft: '25px', paddingRight: '25px'}} variant="outline-danger">Remove</Button>
                </Col>
            </Row>
        );

        // <Form>
        // <Form.Group controlId="formBasicQuestion">
        //     <div style={{display: 'flex'}}>
        //     <Form.Control onChange={e => { this.setState({ question: e.target.value }, () => console.log(this.state.question) )}} placeholder="Enter name of new question" />
        //     <Button onClick={this.AddQuestion} variant="success" style={{marginLeft: '10px', paddingLeft: '50px', paddingRight: '50px'}}>Add</Button>
        //     </div>
        // </Form.Group>
        // </Form>

        return (<>
        <Form>
            <Form.Group controlId="formBasicTemplate">
                <Form.Label>New template name:</Form.Label>
                <Form.Control placeholder="Enter name of new template" />
            </Form.Group>
        </Form>

        <Form>
            <Form.Group controlId="formBasicQuestion">
                <Form.Label>Add new question:</Form.Label>
                <div style={{display: 'flex'}}>
                <Form.Control onChange={e => { this.setState({ question: e.target.value }, () => console.log(this.state.question) )}} placeholder="Enter name of new question" />
                <Button onClick={this.AddQuestion} variant="success" style={{marginLeft: '10px', paddingLeft: '50px', paddingRight: '50px'}}>Add</Button>
                </div>
            </Form.Group>
        </Form>
        
        <div style={{marginTop: '25px'}}>{questionslist}</div>


        </>);
    }
}
 
export default Modalbody;