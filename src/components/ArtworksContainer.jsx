import { useFetch } from "../useFetch";
import { GridHeading } from "./GridHeading";
import { ArtworkComponent } from "./ArtworkComponent";

export const ArtworksContainer = () => {
	const { data, loading, error } = useFetch(
		"https://api.artic.edu/api/v1/artworks?limit=4&fields=id,title,artist_titles,image_id"
	);

	if (error) {
		return <div className="pt-7 container">Error...</div>;
	} else if (loading) {
		return <div className="pt-7 container">Loading...</div>;
	} else {
		return (
			<div className="border-b-violet-50 border-b">
				<section className="container pt-16 pb-8">
					<GridHeading heading="artworks" />
					<div className="grid-container grid artworks-grid gap-10 my-8">
						{data.map((el, i) => {
							return (
								<ArtworkComponent
									key={i}
									id={el.id}
									image_id={el.image_id}
									title={el.title}
									artist_titles={el.artist_titles}
								/>
							);
						})}
					</div>
				</section>
			</div>
		);
	}
};
