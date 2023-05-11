export const Footer = () => {
	const quotes = [
		{
			quote:
				"Art enables us to find ourselves and lose ourselves at the same time.",
			author: "Thomas Merton",
		},
		{
			quote: "Art is to console those who are broken by life.",
			author: "Vincent Van Gogh",
		},
		{
			quote: "Art should comfort the disturbed and disturb the comfortable.",
			author: "Banksy",
		},
		{
			quote:
				"Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
			author: "Leonardo da Vinci",
		},
		{
			quote:
				"Art wasn’t supposed to look nice; it was supposed to make you feel something.",
			author: "Rainbow Rowell",
		},
	];

	const RandomQuote = () => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		return (
			<cite className="text-2xl">
				{randomQuote.quote}
				<br />
				<span className="text-xl float-right py-1">--{randomQuote.author}</span>
			</cite>
		);
	};
	return (
		<footer className="border-t-violet-50 border-t">
			<div className="container pt-10 pb-8">
				<div className="text-center w-fit mx-auto mb-16">
					<RandomQuote />
				</div>
				<div className="flex justify-between items-center flex-wrap gap-3">
					<h2 className="w-fit flex gap-1">
						<span>Made by</span>
						<a
							href="https://github.com/Krrish105"
							className="text-yellow-300 link-state"
							target="_blank"
							rel="noreferrer"
						>
							Karishma Garg
						</a>{" "}
						<span>with &#10084;.</span>
					</h2>
					<span className="float-right flex gap-2 flex-wrap">
						<span>CREDITS TO:</span>
						<a
							href="https://www.artic.edu/"
							className="text-yellow-300 link-state"
							target="_blank"
							rel="noreferrer"
						>
							ART INSTITUTE OF CHICAGO
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};
