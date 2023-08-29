import React, { useRef, useState, useEffect } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter, Table } from 'reactstrap'
import SubmitButton from '../../buttons/SubmitButton'
import AddRoom from './AddRoom';

function AvailableRooms(props) {

    const titleRef = useRef();
    const descRef = useRef();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descRef.current.value;

        let body = JSON.stringify({
            title,
            description
        });

        const url = 'http://localhost:4010/room'

        let headers = new Headers();
        headers.append(`Content-Type`, `application/json`);
        headers.append('Authorization', props.token)

        const requestOption = {
            headers: headers,
            body: body,
            method: 'POST'
        }

        try {
            const res = await fetch(url, requestOption);
            const data = await res.json();

            // console.log(data);
            props.fetchRooms();
        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <>
            <div
                style={
                    {
                        background: 'grey',
                        height: '85vh',
                        marginTop: '1em',
                        marginBottom: '5em',
                        padding: '1em'

                    }
                }
            >
                <h5>Available Rooms</h5>
                <Table hover>
                    <tbody>
                        {
                            props.rooms.map(room => {
                                return (
                                    <tr key={room._id}
                                        onClick={() => props.setSelectedRoom(room)}
                                        onCanPlay={console.log(props.selectedRoom)}
                                    >
                                        <th scope='row'>{room.title}</th>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
                <div>
                    <AddRoom 
                    token={props.token}
                    rooms={props.rooms}
                    fetchRooms={props.fetchRooms}        
                    />
                </div>
            </div>
        </>
    )
}
export default AvailableRooms