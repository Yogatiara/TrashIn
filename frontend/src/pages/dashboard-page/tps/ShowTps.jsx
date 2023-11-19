import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../api/api";
import moment from "moment";
const ShowEvent = () => {
  const { id } = useParams();
  const [tps, setTps] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/tps/${id}`, {
        params: {
          withUser: true,
          withImage: true,
          withUserFromImage: true,
          withEvent: true,
        },
      })
      .then((res) => {
        setTps(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onUpdateHandler = (e) => {
    e.preventDefault();
    api
      .put(`/tps/${id}`, tps)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  console.log(tps);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-fit bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Detail TPS - {id}</h1>

      <form onSubmit={onUpdateHandler} className="flex flex-col gap-2">
        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Alamat TPS</label>
            <input
              type="text"
              name="name"
              id="name"
              className="flex-1 rounded-md p-2"
              value={tps.address}
              onChange={(e) => setTps({ ...tps, address: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Sudah bersih</label>
            <select
              value={tps.is_clean}
              onChange={(e) =>
                setTps({ ...tps, is_clean: Boolean(e.target.value) })
              }
              className="flex-1 rounded-md p-2"
            >
              <option value={false}>Belum bersih</option>
              <option value={true}>Bersih</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Latitude</label>
            <input
              type="text"
              name="latitude"
              id="latitude"
              value={tps.latitude}
              onChange={(e) => setTps({ ...tps, latitude: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Longitude</label>
            <input
              type="text"
              name="longitude"
              id="longitude"
              value={tps.longitude}
              onChange={(e) => setTps({ ...tps, longitude: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Catatan</label>
            <input
              type="text"
              name="notes"
              id="notes"
              value={tps.notes}
              onChange={(e) => setTps({ ...tps, notes: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-4 items-center w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="name">Dilaporkan oleh</label>
              <input
                type="text"
                name="name"
                id="name"
                className="flex-1 rounded-md p-2"
                placeholder="Harap pilih tps dengan menekan tanda lokasi tps yang tertera di map di bawah."
                value={tps.user?.name}
                readOnly
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#2FC8B0] hover:bg-[#358a7c] text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          Simpan Data
        </button>

        <div className="flex flex-col gap-1 w-full">
          <h1 className="font-bold">Gambar Terlapor</h1>
          <div className="flex flex-wrap">
            {tps.tpsimages.map((image, index) => (
              <div className="p-3 flex flex-1 gap-4 border" key={image.id}>
                <p>{index + 1}</p>
                <a
                  href={`http://localhost:5000/${
                    image.path.split("public\\")[1]
                  }`}
                  target="_blank"
                  className="underline text-blue-500"
                >
                  Lihat Gambar
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <h1 className="font-bold">Event Volunteer</h1>
          <div className="flex flex-col">
            {tps.events.map((event, index) => (
              <div className="p-3 flex flex-1 gap-4 border" key={event.id}>
                <p>{index + 1}</p>
                <Link
                  to={`/dashboard/list-event/${event.id}`}
                  className="underline text-blue-500"
                >
                  <p>{event.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShowEvent;
