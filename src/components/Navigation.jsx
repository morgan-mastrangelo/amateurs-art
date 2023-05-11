import { Link } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className='py-3 bg-neutral-900 sticky top-0 z-10 w-full'>
			<div className='container flex justify-between items-center mt-1 flex-wrap gap-2'>
				<h1>
					<Link to='/amateurs-d-art/' className='capitalize text-2xl'>
						Amateurs d'art
					</Link>
				</h1>

				<ul className='flex gap-4 text-lg'>
					<li>
						<Link to='/amateurs-d-art/page/artworks' className='link-state'>
							Artworks
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
