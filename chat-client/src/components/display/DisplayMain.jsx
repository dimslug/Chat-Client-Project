import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import AvailableRooms from './room/AvailableRooms'
import RoomDisplay from './room/RoomDisplay'
import AddRoom from './room/AddRoom';

function DisplayMain(props) {

    const [rooms, setRooms] = useState([]);

    const [selectedRoom, setSelectedRoom] = useState([]);

    const fetchRooms = async () => {
        const url = 'http://localhost:4010/room'

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            setRooms(data.getAllRooms)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        if (props.token) {
            fetchRooms()
        }
    }, [props.token])


    return (
        <>
            <Container style={
                {
                    marginLeft: '1em',
                    marginRight: '1em'

                }
            }>
                <Row>
                    <Col md='3'>
                        <AvailableRooms
                            rooms={rooms}
                            token={props.token}
                            fetchRooms={fetchRooms}
                            selectedRoom={selectedRoom}
                            setSelectedRoom={setSelectedRoom}

                        />
                    </Col>
                    <Col md='9'>
                        <RoomDisplay
                            rooms={rooms}
                            token={props.token}
                            fetchRooms={fetchRooms}
                            selectedRoom={selectedRoom}
                            setSelectedRoom={setSelectedRoom}

                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DisplayMain