import axios from "axios";

const API_URL = "";

const testApi = async () => {
  const result = await axios.get(API_URL);
  const { data } = result;
  return data;
};

export { testApi };
