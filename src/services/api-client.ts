import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "151d630d65944ebab884c3c3767d6345",
  },
});
