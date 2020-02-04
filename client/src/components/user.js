import React from 'react';
import {useSelector} from 'react-redux';
import { Title, Main } from '../styled/theme';
const UserStory = () => {
	const session = useSelector( 
		state => state.session,
	);
	return(
		<Main>
			<Title>{session.username}'s Trips</Title>
		</Main>) ;
};

export default UserStory;