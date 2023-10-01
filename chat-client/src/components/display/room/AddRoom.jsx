import React, { useRef, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import SubmitButton from '../../buttons/SubmitButton'

function AddRoom(props) {

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
            <div>
                <Button color='success' onClick={toggle}>
                    Create New Room
                </Button>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader>New Chat Room</ModalHeader>
                    <ModalBody>
                        <h1>Create Room</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input name="roomTitle" innerRef={titleRef} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <Input name='roomDescription' innerRef={descRef} />
                            </FormGroup>
                            <SubmitButton>
                                <Button type='submit' color='success' onClick={toggle}>
                                    Create
                                </Button>
                            </SubmitButton>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal></div>
        </>
    )
}

export default AddRoom