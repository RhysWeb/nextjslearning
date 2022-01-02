import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';

//getStaticPaths is used to create paths based on the info in the posts folder
//This runs at build time
//Its important for nextjs that the object looks like this so that the dynamic paths are created correctly. The 'paths' variable is taken from getAllPostIds() which returns an array
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className="text-3xl font-extrabold pt-5">{postData.title}</h1>
				<div className="text-gray-600 pt-10">
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}
