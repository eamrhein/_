export async function  fetchimgs(ids) {
	let imgs = await Promise.all(ids.map(async id => {
		let imgRes = await fetch(`/img/${id.key}?type=${id.mimetype}`);
		let res = await imgRes.json();
		return res; 
	}));
	return await imgs;
}