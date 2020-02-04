import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from '../styled/theme';

const AuthStyle = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-left: 20vw;
    margin-right: 20vw;
`;
const SignUp = () => {
	return(
		<AuthStyle>
			<h3>Signup</h3>
			<Form onSubmit={e => e.preventDefault()}>
				<Input type="text" placeholder="Username" />
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Button type="submit">Login</Button>
			</Form>
		</AuthStyle> 
	);
};

export default SignUp;