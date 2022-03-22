import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;
export const useAxios = () => {
  const request = async ({
    url = "",
    method = "get",
    body = null,
    headers = {},
    includeToken = true,
  }) => {
    return await axios({
      method,
      url: `${REACT_APP_BASE_URL}${url}`,
      data: {
        ...body,
      },
      headers: {
        Authorization: `${includeToken && localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        ...headers,
      },
    })
      .then((res) => res)
      .catch((err) => err);
  };
  return { request };
};
export default useAxios;

// 1. UseAxios digan arrow funtion yurgazdik
// 2. request degan arrow yurgazdik va asynchihron qilib oldik
// 3. uni return axios ga
// 4. requst argument berdik default qiymatlar ham berib yuboriladi url , method, body, headers, includeToken
// 5. argument berganlarni chaqirib olamiz
// 6. datada body spread qilinadi, headers da Authorization ochiladi
// 7. includeToken qilinadi, localStroragedan malumot olib kelinadi
// 7. then catch
// 8. request return qilib qoyiladi
// "Content-Type": "application/json",
