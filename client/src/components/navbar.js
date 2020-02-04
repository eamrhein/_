import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItems, Title} from '../styled/theme';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../actions/session';
import styled from 'styled-components';

const Logo = styled.span`
	font-weight: bolder;
	color: ${props => props.theme.colors.primary};
`;
const Navbar = () => {
	const session = useSelector( 
		state => state.session,
	);
	const dispatch = useDispatch();
	return(
		<Nav>
			<NavItems>
				<li className="logo">
					<Link to="/">
						<h1>Travel<Logo>Story</Logo></h1>
					</Link>
				</li>
				{session.isAuthenticated ?
					<>
						<li>
							<Link to={'/user/' + session.id} >
							My Stories
							</Link>
						</li>
						<li><a href="" onClick={() => dispatch(logout())}>Logout</a></li>
					</>
					:
					<>
						<li>
							<Link to="/login">
								Login
							</Link>
						</li>
						<li>
							<Link to="/signup">
								Signup
							</Link>
						</li>
					</>
				}		
			</NavItems>
		</Nav>);
};

export default Navbar;