export const Header = () => {
	return (
		<header className="relative">
			<div className="absolute top-0 bottom-0 left-0 right-0 hero-img-overlay"></div>
			<div className="container relative h-screen max-h-[600px]">
				<p className="absolute text-4xl lg:text-6xl left-5 lg:left-0 bottom-16 leading-tight">
					See the beatiful artworks <br /> that are shown in the Art <br />{" "}
					Institute of Chicago.
				</p>
			</div>
		</header>
	);
};
