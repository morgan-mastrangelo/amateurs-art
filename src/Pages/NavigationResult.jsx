import { useParams } from "react-router";
import { useFetch } from "../useFetch";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { ArtworkComponent } from "../components/ArtworkComponent";

export const NavigationResult = () => {
	const pageName = useParams();
	const [page, setPage] = useState(1);
	const { pagination, data, loading, error } = useFetch(
		`https://api.artic.edu/api/v1/${pageName.name}?page=${page}&limit=30`
	);

	const handlePageChange = (value) => {
		setPage(value);
	};

	const GetComponent = () => {
		if (pageName.name === "artworks") {
			return data.map((el, i) => {
				return (
					<ArtworkComponent
						key={i}
						id={el.id}
						image_id={el.image_id ? el.image_id : ""}
						title={el.title}
						artist_titles={el.artist_titles}
					/>
				);
			});
		}
	};

	useEffect(() => {
		setPage(1);
	}, [pageName]);

	if (error) {
		return <div className='pt-7 container'>Error...</div>;
	}
	if (loading) {
		return <div className='pt-7 container'>Loading...</div>;
	}
	if (!loading) {
		return (
			<main className='pt-7 container'>
				<h2 className='text-3xl font-bold capitalize'>{pageName.name}</h2>
				<div className='masonry-grid-container'>
					<GetComponent />
				</div>
				<div className='relative mt-10 mb-20'>
					<Stack spacing={1}>
						<Pagination
							count={pagination.total_pages}
							page={page}
							defaultPage={1}
							color='primary'
							variant='outlined'
							shape='rounded'
							className='float-right w-fit absolute right-0'
							onChange={(event, value) => handlePageChange(value)}
							boundaryCount={2}
						/>
					</Stack>
				</div>
			</main>
		);
	}
};
