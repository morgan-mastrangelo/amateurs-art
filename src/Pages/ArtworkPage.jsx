import { useParams } from "react-router";
import { useFetch } from "../useFetch";
import { Link } from "react-router-dom";

export const ArtworkPage = () => {
	const id = useParams();
	const { data, loading, error } = useFetch(
		`https://api.artic.edu/api/v1/artworks/${id.artworkId}?fields=title,place_of_origin,copyright_notice,gallery_title,artist_ids,artwork_type_title,artist_titles,image_id`
	);

	if (error) {
		return <div className='pt-7 container'>Error...</div>;
	} else if (loading) {
		return <div className='pt-7 container'>Loading...</div>;
	} else {
		const imgUrl = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
		return (
			<main className='pt-7 container pb-12'>
				<div className='grid gap-11 artwork-page-grid'>
					<div className='border pb-3 px-3'>
						<img src={imgUrl} alt='' className='max-h-[30rem] w-full' />
						<h2 className='mt-6 text-2xl'>{data.title}</h2>
					</div>
					<ul className='leading-loose text-lg artwork-artist-list'>
						{data.place_of_origin && (
							<li>
								Place of Origin:<span> {data.place_of_origin}</span>
							</li>
						)}
						{data.gallery_title && (
							<li>
								Gallery:<span>{data.gallery_title}</span>
							</li>
						)}
						{data.artwork_type_title && (
							<li>
								Artwork Type:<span>{data.artwork_type_title}</span>
							</li>
						)}
						{data.copyright_notice && (
							<li>
								Copyright:<span>{data.copyright_notice}</span>
							</li>
						)}
						{data.artist_titles.length ? (
							<li className='flex flex-wrap'>
								Artist(s):
								{data.artist_titles.map((el, i) => {
									return <span>{el}</span>;
								})}
							</li>
						) : (
							""
						)}
					</ul>
				</div>
			</main>
		);
	}
};
