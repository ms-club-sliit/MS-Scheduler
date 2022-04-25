import axios from "axios";

const login = (userName, password) => {
  return axios
    .post(process.env.NEXT_PUBLIC_API_ENDPOINT + "/user/login", {
      userName: userName,
      password: password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return { Authorization: token };
  } else {
    return {};
  }
};

const authService = { login, logout, authHeader };
export default authService;
