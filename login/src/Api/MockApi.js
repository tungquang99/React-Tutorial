import axios from "axios";

export default function mockApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `https://5f55deba39221c00167fb3b8.mockapi.io/api/users/${endpoint}`,
    data: body,
  });
}
