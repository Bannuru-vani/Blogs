import axios from "axios";
export const loginservice = async (email, password) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/auth/login`;
  let request = await axios.post(
    url,
    {
      email,
      password,
    },
    {}
  );
  return request;
};

export const registerservice = async (name, email, password) => {
  let url = `https://blogs-k8y2.onrender.com/api/v1/auth/signup`;
  let request = await axios.post(
    url,
    {
      name,
      email,
      password,
    },
    {}
  );
  return request;
};
