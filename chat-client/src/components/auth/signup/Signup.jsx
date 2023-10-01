import React, { useRef } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import SubmitButton from '../../buttons/SubmitButton'
import { useNavigate } from 'react-router-dom';

function Signup({ updateToken }) {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let body = JSON.stringify({
            username, email, password
        })

        const headers = new Headers();
        headers.append('Content-type', 'application/json')

        const requestOptions = {
            headers,
            body: body,
            method: 'POST'
        }

        const url = 'http://localhost:4010/users/signup';

        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json()
            
            //NOTE - May need to change message to match the 200res from server
            if(data.message === 'User Created') {
                updateToken(data.token)
                navigate('/room')
            } else {
                alert(data.message)
            }

        } catch (err) {
            
            console.log(err.message)
        }

    }


return (


    <>
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
            <FormGroup floating>
                <Input
                    innerRef={usernameRef}
                    id='username'
                    name='username'
                    placeholder='User Name'
                    type='text'
                />
                <Label for="username">
                    User Name
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    innerRef={emailRef}
                    id='email'
                    name='email'
                    placeholder='Email'
                    type='email'
                />
                <Label for="email">
                    Email
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    innerRef={passwordRef}
                    id='password'
                    name='password'
                    placeholder='Password'
                    type='password'
                />
                <Label for='password'>
                    Password
                </Label>
            </FormGroup>
            <SubmitButton>
                <Button type='submit' color='dark'>Sign Up</Button>
            </SubmitButton>
        </Form>

    </>
)
}

export default Signup