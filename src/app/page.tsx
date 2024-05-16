import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default async function Home() {
	return (
		<main>
			<h1 className="text-lg font-medium">Recent publications</h1>
			<ul className="flex flex-col gap-2 mt-4">
				{allPosts.map((post) => (
					<Publication
						key={post.slug}
						title={post.title}
						author={post.author}
						slug={post.slug}
					/>
				))}
			</ul>
		</main>
	);
}

const Publication = ({
	title,
	author,
	slug,
}: { title: string; author: string; slug: string }) => {
	return (
		<Link href={slug}>
			<li className="flex items-center justify-between">
				<h2 className="hover:cursor-pointer hover:underline hover:underline-offset-4">
					{title}
				</h2>
				<p className="text-sm text-muted-foreground">by {author}</p>
			</li>
		</Link>
	);
};
