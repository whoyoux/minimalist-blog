import { defineDocumentType, makeSource } from "contentlayer/source-files";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "**/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		author: { type: "string", required: true },
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (post) => `/${post._raw.flattenedPath}`,
		},
		slugAsParams: {
			type: "string",
			resolve: (post) => `${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "src/content",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["subheading-anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
});
