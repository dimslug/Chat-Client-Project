import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import SubmitButton from '../../buttons/SubmitButton'

function Login({ updateToken }) {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let body = JSON.stringify({
            email, password
        })

        const url = 'http://localhost:4010/users/login';

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: body
            })

            const data = await res.json();

            //NOTE - May need to change message to match the 200res from server
            if(data.message === 'Success!') {
                updateToken(data.token)
                navigate('/room')
            } else {
                alert(data.message);
            }

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
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
                    <Button type='submit' color='dark' >Login</Button>
                </SubmitButton>
            </Form>
        </>
    )
}

export default Login