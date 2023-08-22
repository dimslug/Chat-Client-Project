import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AvailableRooms from './room/AvailableRooms'
import RoomDisplay from './room/RoomDisplay'

function DisplayMain() {




    return (
        <>
            <Container>
                <Row>
                    <Col md='2'>
                        <AvailableRooms />
                    </Col>
                    <Col md='10'>
                        <RoomDisplay />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DisplayMain