import axios from "axios";

export const pushPost = post => {
  return axios.post("/newPost", post);
};
export const getAllPosts = page => {
  return axios.post("/getAllPosts", page);
};
