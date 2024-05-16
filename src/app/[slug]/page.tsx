import { Mdx } from "@/components/mdx-components";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { allPosts } from "contentlayer/generated";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: Params) {
	const post = await getPostFromParams(params.slug);
	return {
		title: `${post.title} | ${siteConfig.baseTitle}`,
	};
}

const getPostFromParams = async (slug: string) => {
	const post = allPosts.find((post) => post.slugAsParams === slug);

	if (!post) return notFound();
	return post;
};

const BlogPostPage = async ({ params }: Params) => {
	const post = await getPostFromParams(params.slug);
	return (
		<div>
			<div className="w-full my-4 flex items-center justify-between">
				<Link href="/">
					<Button variant="link" className="mx-0 pl-0">
						<ChevronLeft size={24} /> Go back
					</Button>
				</Link>
				<span className="text-muted-foreground text-sm">by {post.author}</span>
			</div>
			<Mdx code={post.body.code} />
		</div>
	);
};

export default BlogPostPage;
