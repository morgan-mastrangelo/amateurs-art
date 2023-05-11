import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [pagination, setPagination] = useState([]);

	const fetch = async () => {
		setLoading(true);
		setError(false);
		try {
			let res = await axios.get(url);
			setData(res.data.data);
			setPagination(res.data.pagination);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetch();
	}, [url]);

	return { pagination, data, loading, error };
};
