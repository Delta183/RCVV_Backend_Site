import React, { useState }  from "react";
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const LoginComponent = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    // The two modes are sign up and sign in. This will flip them effectively
    const switchMode = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if (isSignup) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // For the form, the name of the groups must be in the control tag
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
                <Form.Group className="m-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                name="firstName"
                type="text" 
                placeholder="Enter your first name..." 
                // This is a setter method, the ...articleData in this case is necessary to ensure subsequent textfields don't override title
                onChange={handleChange}/>
                </Form.Group>

                {/* Second Segment */}
                <Form.Group className="m-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                name="lastName"
                type="text" 
                placeholder="Enter your last name..." 
                onChange={handleChange}
                />
                </Form.Group>
            </div>
        )}
       

        {/* Third Segment */}
        <Form.Group className="m-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control
            name="email"
            type="email" 
            placeholder="Enter your email..." 
            onChange={handleChange}
            />
        </Form.Group>
    
        {/* Fourth Segment: Nested Input Group in Form Group could arise issues*/}
        <Form.Group className="m-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
                <Form.Control
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password..." 
                onChange={handleChange}
                />
                <Button onClick={handleShowPassword} variant="outline-secondary" id="button-addon2">
                    Show Password
                </Button>
            </InputGroup>
        </Form.Group>
        {/* only show the confirm password if the user is signing up */}
        { isSignup && 
        <Form.Group className="m-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            name="confirmPassword"
            type="password" 
            placeholder="Confirm your password..." 
            onChange={handleChange}
            />
        </Form.Group>}
        {/* Fifth Segment */}
        
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