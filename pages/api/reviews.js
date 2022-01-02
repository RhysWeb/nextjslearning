// This is an api that can be called at http://localhost:3000/api/reviews

export default function handler(req, res) {
	res.status(200).json({ text: 'REviews' });
}
