import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { login } from '../actions/session';

import styled from 'styled-components';
import { Form, Input, Button } from '../styled/theme';
const AuthStyle = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-left: 20vw;
    margin-right: 20vw;
`;
const Login = () => {
	let [form, setForm] = useState({
		email: '',
		password: ''
	});
	const dispatch = useDispatch();
	const handleChange = (e, name) => {
		setForm({...form, [name]: e.currentTarget.value});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(form));
	};
	return(
		<AuthStyle>
			<h3>Login</h3>
			<Form onSubmit={e => handleSubmit(e)}>
				<Input type="email" placeholder="Email" value={form.email} onChange={(e) => handleChange(e, 'email')} />
				<Input type="password" placeholder="Password" value={form.password} onChange={(e) => handleChange(e, 'password')}  />
				<Button type="submit">Login</Button>
			</Form>
		</AuthStyle> 
	);
};

export default Login;