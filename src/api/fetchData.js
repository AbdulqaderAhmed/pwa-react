import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts/";

export const {
  fetchData,
} = async () => {
  const data = await axios.get(URL);
  return data;
};
