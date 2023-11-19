import api from "./api";

const getDecodedToken = async () => {
  if (!localStorage.getItem("accessToken")) return null;

  return api
    .get("/user/token")
    .then((response) => {
      return response.data.payload;
    })
    .catch((err) => {
      return err;
    });
};

export default getDecodedToken;
