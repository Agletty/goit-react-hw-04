import axios from "axios";

const API_URL = "https://api.unsplash.com/photos/";
const API_KEY = "7URfErPpCda_zfTPT05FknSNSXhSl5J4xIoFjZvec_g";

const fetchPhotos = async (query, page = 1, perPage = 10) => {
  const response = await axios.get(API_URL, {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};

export default fetchPhotos;
