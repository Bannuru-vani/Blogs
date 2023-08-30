import axios from "axios";
import { getAuthToken } from "./Authtoken";
export const blogData = async () => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/all`;
  let request = await axios.get(
    url,

    {}
  );
  return request;
};
export const individualblogData = async (id) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/${id}`;
  let request = await axios.get(
    url,

    {}
  );
  return request;
};

export const getMyblogs = async () => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/myblogs`;
  let request = await axios.get(url, {
    headers: {
      authorization: `Bearer ${getAuthToken()}`,
    },
  });
  return request;
};
export const getUser = async () => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/auth/me`;
  let request = await axios.get(url, {
    headers: {
      authorization: `Bearer ${getAuthToken()}`,
    },
  });
  return request;
};

export const deleteBlog = async (_id) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/${_id}`;
  let request = await axios.delete(url, {
    headers: {
      authorization: `Bearer ${getAuthToken()}`,
    },
  });
  return request;
};

export const createBlog = async (data) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/create`;
  let request = await axios.post(
    url,

    {
      ...data,
    },
    {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    }
  );
  return request;
};
export const updateBlog = async (data) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/6444f913b08b410aadbb92db`;
  let request = await axios.put(
    url,

    {
      ...data,
    },
    {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    }
  );
  return request;
};
export const getClap = async (_id) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/clap/${_id}`;
  let request = await axios.put(
    url,
    {},
    {},
    {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    }
  );
  return request;
};
export const bloglikes = async (_id) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/blog/clap/${_id}`;
  let request = await axios.put(
    url,
    {},
    {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    }
  );
  return request;
};
