import { Component } from 'react'
import Form from 'react-bootstrap/form'
import { Row, Col, Container } from 'react-bootstrap'

class Reservation extends Component {
    state = {
        reservation: {
            name: "",
            phoneNumber: "",
            numberOfPeople: 5,
            date: ""

        }
    }
    HandleInput = (name, value) => {
        this.setState({
            reservation: {
                ...this.state.reservation,
                [name]: value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
       let reserv=(this.state.reservation)
    try{
   let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation', {
                method: 'POST',
                body: JSON.stringify(reserv),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (response.ok) {
                alert('OK!')
                // let's reset the form restoring the initial values
                this.setState({
                    reservation: {
                        name: "",
                        phoneNumber: "",
                        numberOfPeople: 5,
                        date: ""
                    }
                })
            } else {
                alert('ERROR')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    render() {
        return (
            <>
                <Container>
                    <Row className="mt-3 justify-content-center">
                        <Col xs={12} md={6} className="text-center">
                            <h2>Book Reservation</h2>
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name"
                                    value={this.state.reservation.name}
                                    onChange={(e) => {
                                        this.HandleInput('name', e.target.value)
                                    }
                                    }

                                />
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="Enter phone number"
                                    value={this.state.reservation.phoneNumber}
                                    onChange={(e) => {
                                        this.HandleInput('phoneNumber', e.target.value)
                                    }
                                    } />

                                <Form.Label>Select Number of People</Form.Label>
                                <Form.Control as="select"
                                    value={this.state.reservation.numberOfPeople}
                                    onChange={(e) => {
                                        this.HandleInput('numberOfPeople', e.target.value)
                                    }
                                    }
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>

                                <Form.Label>Date</Form.Label>
                                <Form.Control type="datetime-local" placeholder="Enter the date"
                                    value={this.state.reservation.date}
                                    onChange={(e) => {
                                        this.HandleInput('date', e.target.value)
                                    }
                                    }
                                />
                                <button type="submit" className="btn-primary mt-2">Submit</button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Reservation