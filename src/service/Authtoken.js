export const getAuthToken = () => {
  return localStorage.getItem("token");
};
//first we need to set the value after that getvalue
export const setAuthToken = (token) => {
  return localStorage.setItem("token", token);
};
export const removeToken = () => {
  return localStorage.removeItem("token");
};
