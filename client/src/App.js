import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './styled/theme';
import Navbar from './components/navbar';
import RecentImgs from './components/recent';
import UserStory from './components/user';
import Login from './components/login';
import SignUp from './components/signup';
import {AuthRoute} from './util/route';

const AppStyle = styled.div`
    a {
        text-decoration: none;
        color:${props => props.theme.colors.font};
    } 
    a:visited {
        color:${props => props.theme.colors.font};
    }
    background-color: ${props => props.theme.colors.background};
	height: 100vh;
	overflow: hidden;
	flex-flow: column;
    display: flex;
    font-size: calc(9pt + 0.5vmin);
    color: ${props => props.theme.colors.font};
    
`;

function App(props) {
	const session = useSelector( 
		state => state.session,
	);
	return (
		<ThemeProvider theme={theme}>
			<AppStyle>
				<Navbar />
				<Route exact path="/" component={RecentImgs} />
				<AuthRoute exact path="/login" component={Login} />
				<AuthRoute exact path="/signup" component={SignUp} />
				<Route path='/user/:id' component={UserStory} />
				<Redirect to="/" />
			</AppStyle>
		</ThemeProvider>
	);
}

export default App;
