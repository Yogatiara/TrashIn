import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";

const ShowEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/event/${id}`)
      .then((res) => {
        setEvent(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  console.log(event);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Detail Event - {id}</h1>

      <div></div>
    </div>
  );
};

export default ShowEvent;
