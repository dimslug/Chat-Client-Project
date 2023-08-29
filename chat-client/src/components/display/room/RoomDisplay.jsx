import React from 'react'
import { Container, Form, Input, Label, Row, Col, Button } from 'reactstrap'

function RoomDisplay( props ) {



    return (
        <>
            <Container fluid className='justify-content'
                style={
                    {
                        background: 'grey',
                        height: '85vh',
                        width: '70vw',
                        marginTop: '1em',
                        marginBottom: '2em',
                        padding: '1em'

                    }
                }>


                <Row className='gx-3'>
                    <Col md='2'>
                        <Button>Delete</Button>
                    </Col>
                    <Col md='10'>
                        <h3>{props.selectedRoom.title}</h3>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md='2'>
                        <h3>Description</h3>
                        <p>{props.selectedRoom.description}</p>
                    </Col>
                    <Col>
                        <Container
                            style={
                                {
                                    background: 'white',
                                    height: '40rem',
                                    width: '65rem'
                                }
                            }
                        >

                        </Container>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md='2'>
                        <Button>Update Room</Button>
                    </Col>
                    <Col md='10'>
                        <Form>
                            <Row className='align-items-center'>
                                <Col md='10'>
                                    <Input
                                        type='text'
                                        name='message'
                                        id='message'
                                    />
                                </Col>
                                <Col md='2'>
                                    <Button>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default RoomDisplay