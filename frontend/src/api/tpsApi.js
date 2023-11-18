import axios from 'axios';

const getTpsData = async () => {
  const tpsData = await axios.get( "http://localhost:5000/api/tps");
  return tpsData.data;
};

export default getTpsData;