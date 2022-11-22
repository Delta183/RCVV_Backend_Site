import React, { useState }  from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { GoogleLogin } from '@react-oauth/google';
import { signin, signup } from '../../actions/auth';
import { AUTH } from "../../constants/actionTypes";
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const LoginComponent = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    // The two modes are sign up and sign in. This will flip them effectively
    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };
    
    const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
        dispatch(signup(form, history));
    } else {
        dispatch(signin(form, history));
    }
    };
    

    const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
        dispatch({ type: AUTH, data: { result, token } });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
    };

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
    <div className="">
    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
        {/* Make the correct title appear depending on which state it is */}
        <h2>{ isSignup ? 'Sign up' : 'Sign in' }</h2>
        </div>
        {/* If signing up, display the name forms */}
        { isSignup && (
            <div>
              {/* First segment of the form (i.e. title, text input, extra text
        mb refers to the level of the 'b' bottom margin. me is for the 'e' end margin  */}
                <Form.Group className="m-3" name="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter your first name..." 
                // This is a setter method, the ...articleData in this case is necessary to ensure subsequent textfields don't override title
                handleChange={handleChange}/>
                </Form.Group>

                {/* Second Segment */}
                <Form.Group className="m-3" name="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter your last name..." 
                handleChange={handleChange}
                />
                </Form.Group>
            </div>
        )}
       

        {/* Third Segment */}
        <Form.Group className="m-3" name="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email" 
        placeholder="Enter your email..." 
        handleChange={handleChange}
        />
        </Form.Group>
    
        {/* Fourth Segment */}
        <Form.Group className="m-3" name="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password" 
        placeholder="Enter your password..." 
        handleChange={handleChange}
        />
        </Form.Group>

        {/* Fifth Segment */}
        <Form.Group className="m-3" name="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
        type="password" 
        placeholder="Confirm your password..." 
        handleChange={handleChange}
        />
        </Form.Group>
        {/* The sign in button and the next button reflect the current state of sign in*/}
        <Button className="m-3" variant="primary" type="submit">
        { isSignup ? 'Sign Up' : 'Sign In' }
        </Button>
        <Button className="m-3" variant="primary" onClick={switchMode}>
        { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
        </Button>
    </Form>
    </div>
    );
}

export default LoginComponent;