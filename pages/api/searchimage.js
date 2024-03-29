import axios from "axios";

const Search = async (req, res) => {
  const {
    query: { page, query },
  } = req;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
  const response = await axios.get(URL, {
    params: {
      client_id: process.env.KEY_UNSPLASH,
    },
  });
  res.status(200).json({ data: response.data });
};
export default Search;
