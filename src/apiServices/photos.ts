import axios from "axios";

const API_KEY: string = "CYU9zJmCfjDkQMyQvN4_nWCb1zdRsEWiJs1H7UKCcVM";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.headers.common["Content-Type"] = "application/json";

export type Props = {
  query: string;
  page: number;
  perPage: number;
};

export type ApiResponse<T> = {
  results: T[];
  total: number;
  total_pages: number;
};

const getPhotos = async <T>({
  query,
  page,
  perPage,
}: Props): Promise<ApiResponse<T>> => {
  try {
    const { data } = await axios.get<ApiResponse<T>>("search/photos", {
      params: {
        query,
        page,
        orientation: "landscape",
        per_page: perPage,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching photos:", error.message);
    } else {
      console.error("Unknown error fetching photos:", error);
    }
    throw error;
  }
};

export default getPhotos;
