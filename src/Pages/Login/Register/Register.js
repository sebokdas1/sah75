import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }



    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-info text-center mt-2'>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Have an account? <Link to={'/login'} onClick={navigateToLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;