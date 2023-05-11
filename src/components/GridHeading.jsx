import { Link } from "react-router-dom";

export const GridHeading = ({ heading, link }) => {
	return (
		<div>
			<h2 className="text-3xl flex items-start gap-2 capitalize flex-col flex-wrap md:gap-8 md:flex-row md:items-center">
				{heading}{" "}
				<Link
					to={"/amateurs-d-art/page/" + heading}
					className="text-sm block mt-1"
				>
					Explore more &gt;&gt;
				</Link>
			</h2>
		</div>
	);
};
