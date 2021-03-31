import axios from "axios";

export default (
  setState: (data: Record<string, unknown>) => void,
  url: string
) => {
  axios.get(url).then((res) => {
    setState(res.data);
  });
};
