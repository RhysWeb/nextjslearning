// This is an api that can be called at http://localhost:3000/api/hello

export default async (req, res) => {
	const [siteId, route] = req.query.hello;
	console.log('siteId:');
	console.log(siteId);
	console.log('route');
	console.log(route);
	res.status(200).json({ input: 'dont worry about it' });
};
