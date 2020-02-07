


export async function  signup(userData) {
	let access = localStorage.getItem('jwtToken');
	let res = await fetch('/api/users/register', {
		method: 'post',
		headers: new Headers({
			'Authorization': access,
			'Content-type': 'application/json',
			'Accept': 'application/json',
			'Accept-Charset': 'utf-8'
		}),
		body: JSON.stringify(userData)
	});
	const body = await res.json();
	return body;
}

export async function login(userData)  {
	let access = localStorage.getItem('jwtToken');
	let res = await fetch('/api/users/login', {
		method: 'post',
		headers: new Headers({
			'Authorization': access,
			'Content-type': 'application/json',
			'Accept': 'application/json',
			'Accept-Charset': 'utf-8'
		}),
		body: JSON.stringify(userData)
	});
	const body = await res.json();
	return body;
}