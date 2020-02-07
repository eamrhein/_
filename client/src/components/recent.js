import React, { useState, useEffect } from 'react';
import { Main, Container, SideBar, Trip, TripTitle, TripImg, TripComments, Img, Avatar} from '../styled/theme';


const RecentTrips = () => {
	let [pics, setPics] = useState([]);
	useEffect(() => {
		// fetchimgs([{key:'1580985334413', mimetype: 'image/jpeg'}]).then(imgs => {
		// 	setPics(imgs);
		// });
	}, []);
	return(
		<Container>
			<Main>
				<Trip>
					<TripTitle>
						<Avatar>
							<a href="https://placeholder.com"><Img style={{borderRadius: '50%'}} src="https://via.placeholder.com/40" /></a>
						</Avatar>
						<div className="handle">handle</div>
						<div className="title">Tahoe Vacation</div>
					</TripTitle>
					<TripImg>
						<a href="https://placeholder.com"><Img  src="https://via.placeholder.com/2000" /></a>
					</TripImg>
					<TripComments>
						Comments
					</TripComments>
				</Trip>
				<Trip>
					<TripTitle>
						<Avatar>
							<a href="https://placeholder.com"><Img style={{borderRadius: '50%'}} src="https://via.placeholder.com/40" /></a>
						</Avatar>
						<div className="handle">handle</div>
						<div className="title">Tahoe Vacation</div>
					</TripTitle>
					<TripImg>
						<a href="https://placeholder.com"><Img  src="https://via.placeholder.com/2000" /></a>
					</TripImg>
					<div>
						Comments
					</div>
				</Trip>
			</Main> 
			<SideBar>
				<div className="user" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
					<div style={{height: '60px' , marginRight: '10px'}}><Img style={{borderRadius: '50%'}} src="https://via.placeholder.com/80" /></div>
					<div className="handle" style={{lineHeight: 0.5}}>
						<p>handle</p>
						<p style={{fontSize: '8pt'}}>First Last</p>
					</div>
				</div>
				<div className="friends">
					Friends
				</div>
			</SideBar>
		</Container>
	);
};

export default RecentTrips;
