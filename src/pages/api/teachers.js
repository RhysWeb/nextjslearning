import prisma from '../../backend/utils/prisma';

// Note that the pscale database is called 'teachers'
// So if you want to connect to it from the Command Line you use:
// pscale connect teachers main --port 3309

// You can then manually add entries to it from Bash with:
// npx prisma studio

export default async function assetHandler(req, res) {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const teachers = await prisma.teacher.findMany();
				res.status(200).json(teachers);
			} catch (e) {
				console.error('Request error', e);
				res.status(500).json({ error: 'Error fetching teachers' });
			}
			break;
		default:
			res.setHeader('Allow', ['GET']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
