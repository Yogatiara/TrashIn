import api from "./api"

const getTpsData = async () => {
  const res = await api.get("/tps")
  return res.data.data
}

const getUserData = async () => {
  const res = await api.get("/user?withRoles=true")
  // console.log(res.data);
  return res.data.data
}

export  {
  getTpsData,
  getUserData
}