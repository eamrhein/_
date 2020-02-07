import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { signup} from '../actions/session';
import { Form, Input, Button } from '../styled/theme';

const AuthStyle = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-left: 20vw;
    margin-right: 20vw;
`;
const SignUp = () => {
	let [form, setForm] = useState({
		first: '',
		last: '',
		username: '',
		email: '',
		password: ''
	});
	const dispatch = useDispatch();
	const handleChange = (e, name) => {
		setForm({...form, [name]: e.currentTarget.value});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signup(form));
	};
	return(
		<AuthStyle>
			<h3>Signup</h3>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Input type="text" placeholder="handle" value={form.handle} onChange={(e) => handleChange(e, 'username')} />
				<Input type="text" placeholder="First Name" value={form.first} onChange={(e) => handleChange(e, 'first')} />
				<Input type="text" placeholder="Last Name" value={form.last} onChange={(e) => handleChange(e, 'last')} />
				<Input type="email" placeholder="Email" value={form.email}  onChange={(e) => handleChange(e, 'email') }/>
				<Input type="password" placeholder="Password" value={form.password} onChange={(e) => handleChange(e, 'password') } />
				<Button type="submit">Login</Button>
			</Form>
		</AuthStyle> 
	);
};

export default SignUp;