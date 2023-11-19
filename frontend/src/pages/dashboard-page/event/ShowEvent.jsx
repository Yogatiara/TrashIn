import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";
import moment from "moment";
const ShowEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/event/${id}`, {
        params: {
          withTPS: true,
          withImage: true,
        },
      })
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
    <div className="w-full h-fit bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Detail Event - {id}</h1>

      <form className="flex flex-col gap-2">
        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Nama Event</label>
            <input
              type="text"
              name="name"
              id="name"
              className="flex-1 rounded-md p-2"
              value={event.name}
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Status</label>
            <select
              value={event.status}
              onChange={(e) => setEvent({ ...event, status: e.target.value })}
              className="flex-1 rounded-md p-2"
            >
              <option value="OPEN">OPEN</option>
              <option value="CLOSED">CLOSED</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Tanggal Mulai</label>
            <input
              type="date"
              name="start_at"
              id="start_at"
              value={moment(event.start_at).format("yyyy-MM-DD")}
              onChange={(e) => setEvent({ ...event, start_at: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Tanggal Selesai</label>
            <input
              type="date"
              name="end_at"
              id="end_at"
              value={moment(event.end_at).format("yyyy-MM-DD")}
              onChange={(e) => setEvent({ ...event, end_at: e.target.value })}
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
              value={event.notes}
              onChange={(e) => setEvent({ ...event, notes: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Kuota</label>
            <input
              type="number"
              name="quota"
              id="quota"
              value={event.quota}
              onChange={(e) => setEvent({ ...event, quota: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-4 items-center w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="name">TPS</label>
              <input
                type="text"
                name="name"
                id="name"
                className="flex-1 rounded-md p-2"
                placeholder="Harap pilih tps dengan menekan tanda lokasi tps yang tertera di map di bawah."
                value={event.tps?.address}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="name">Titik Kumpul</label>
              <input
                type="text"
                name="gather_point"
                id="gather_point"
                value={event.gather_point}
                onChange={(e) =>
                  setEvent({ ...event, gather_point: e.target.value })
                }
                className="flex-1 rounded-md p-2"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="name">
              Poster (1920 x 1080){" "}
              <a
                href={`http:///10.1.30.90:5000/${
                  event.event_images[0]?.path.split("public\\")[1]
                }`}
                className="underline text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                Lihat poster
              </a>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                if (e.target.files.length === 0) return;
                setEvent({
                  ...event,
                  image: e.target.files[0],
                });
              }}
              className="flex-1 rounded-md border border-gray-300 file:h-full file:bg-[#2FC8B0]"
              accept="image/*"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#2FC8B0] hover:bg-[#358a7c] text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          Simpan Data
        </button>
      </form>
    </div>
  );
};

export default ShowEvent;
