export const settings = {
	dots: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: false,
	loop: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
