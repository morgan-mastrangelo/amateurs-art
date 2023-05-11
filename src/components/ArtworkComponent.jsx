import { Link } from "react-router-dom";

export const ArtworkComponent = ({ id, image_id, title, artist_titles }) => {
	return (
		<div className="border border-white min-h-[16rem]">
			{id && (
				<Link
					to={"/amateurs-d-art/artwork/" + id}
					className="block relative cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out min-h-[16rem]"
				>
					{image_id ? (
						<img
							src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
							alt=""
							className="w-ful h-full"
						/>
					) : (
						<DefaultArtworkImage />
					)}
					<div className="absolute bottom-3 left-3 text-lg bg-black p-3 max-w-xs">
						{title && (
							<h3 className="block max-w-[150px] xl:max-w-[350px] text-ellipsis overflow-hidden whitespace-nowrap">
								{title}
							</h3>
						)}
						{artist_titles?.length > 0 && (
							<h4>
								<span className="opacity-80">Artist: </span>
								{artist_titles.map((el, i) => {
									return i < 2 && <span key={i}>{el}</span>;
								})}
								{artist_titles.length > 2 && <span>...</span>}
							</h4>
						)}
					</div>
				</Link>
			)}
		</div>
	);
};

const DefaultArtworkImage = () => {
	return (
		<div className="flex justify-center items-center w-full h-[inherit] absolute default-artwork-image">
			<span className="text-5xl">Artwork</span>
		</div>
	);
};
