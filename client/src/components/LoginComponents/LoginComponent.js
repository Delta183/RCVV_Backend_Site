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
    
    const clear = () => {
        // setCurrentId(0);
        // Be sure to set the attributes as none once more
        setForm({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
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
 <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
    <h2>Sign In</h2>
    {/* First segment of the form (i.e. title, text input, extra text
      mb refers to the level of the 'b' bottom margin. me is for the 'e' end margin  */}
    <Form.Group className="m-3" name="title">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter your first name..." 
      value={form.firstName} 
      // This is a setter method, the ...articleData in this case is necessary to ensure subsequent textfields don't override title
      onChange={(e) => setForm({...form, firstName: e.target.value})}/>
    </Form.Group>

    {/* Second Segment */}
    <Form.Group className="m-3" name="creator">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter your last name..." 
      value={form.lastName}
      onChange={(e) => setForm({...form, lastName: e.target.value})}
      />
    </Form.Group>

    {/* Third Segment */}
    <Form.Group className="m-3" name="content">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="email" 
      placeholder="Enter your email..." 
      value={form.email}
      onChange={(e) => setForm({...form, email: e.target.value})}
      />
    </Form.Group>
   
      {/* Fourth Segment */}
    <Form.Group className="m-3" name="content">
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="password" 
      placeholder="Enter your password..." 
      value={form.password}
      onChange={(e) => setForm({...form, password: e.target.value})}
      />
    </Form.Group>

    {/* Fifth Segment */}
    <Form.Group className="m-3" name="content">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control
      type="password" 
      placeholder="Confirm your password..." 
      value={form.confirmPassword}
      onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
      />
    </Form.Group>

    {/* Submit and clear button to end all information */}
    <Button className="m-3" variant="primary" type="submit">
      Submit
    </Button>
    <Button variant="primary" onClick={clear}>
      Clear
    </Button>
    </Form>
    );
}

export default LoginComponent;