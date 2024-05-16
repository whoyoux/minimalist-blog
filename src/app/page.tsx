export default function Home() {
	return (
		<main>
			<h1 className="text-lg font-medium">Recent publications</h1>
			<ul className="flex flex-col gap-2 mt-4">
				<Publication />
				<Publication />
				<Publication />
				<Publication />
				<Publication />
			</ul>
		</main>
	);
}

const Publication = () => {
	return (
		<li className="flex items-center justify-between">
			<h2 className="hover:cursor-pointer hover:underline hover:underline-offset-4">
				Publication title
			</h2>
			<p className="text-sm text-muted-foreground">by author</p>
		</li>
	);
};
