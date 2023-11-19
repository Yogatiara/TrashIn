import api from "./api"

const getTpsData = async () => {
  const res = await api.get("/tps");
  return res.data.data;
}

const getTpsDataBYId = async (id) => {
  const res = await api.get(`/tps/${id}`);
  return res.data.data;
}

// const updateTpsData = async () => {
//   const res = await api.put("")
// }

const getUserData = async () => {
  const res = await api.get("/user?withRoles=true");
  return res.data.data;
}

const getEventData = async () => {
  const res = await api.get("/event");
  return res.data.data;
}



export  {
  getTpsData,
  getUserData,
  getEventData,
  getTpsDataBYId
}