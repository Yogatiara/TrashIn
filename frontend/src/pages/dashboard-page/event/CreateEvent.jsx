import { useState } from "react";
import Map from "../../../components/Map";
import api from "../../../api/api";

const CreateEvent = () => {
  const [tps, setTps] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // [1
  const [form, setForm] = useState({
    name: "",
    start_at: "",
    end_at: "",
    notes: "",
    quota: 0,
    tps_id: null,
    gather_point: "",
    status: "OPEN",
    image: null,
  });

  const onMarkerClick = (data) => {
    setTps(data);
    setForm({ ...form, tps_id: data.id });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // return;
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("start_at", new Date(form.start_at).toISOString());
    formData.append("end_at", new Date(form.end_at).toISOString());
    formData.append("notes", form.notes);
    formData.append("quota", form.quota);
    formData.append("tps_id", form.tps_id);
    formData.append("gather_point", form.gather_point);
    formData.append("status", form.status);
    formData.append("image", form.image);

    setIsLoading(true);
    api
      .post("/event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-3">Buat Event</h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Nama Event</label>
            <input
              type="text"
              name="name"
              id="name"
              className="flex-1 rounded-md p-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Tanggal Mulai</label>
            <input
              type="date"
              name="start_at"
              id="start_at"
              value={form.start_at}
              onChange={(e) => setForm({ ...form, start_at: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Tanggal Selesai</label>
            <input
              type="date"
              name="end_at"
              id="end_at"
              value={form.end_at}
              onChange={(e) => setForm({ ...form, end_at: e.target.value })}
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
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Kuota</label>
            <input
              type="number"
              name="quota"
              id="quota"
              value={form.quota}
              onChange={(e) => setForm({ ...form, quota: e.target.value })}
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
                value={tps?.address}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="name">Titik Kumpul</label>
              <input
                type="text"
                name="gather_point"
                id="gather_point"
                value={form.gather_point}
                onChange={(e) =>
                  setForm({ ...form, gather_point: e.target.value })
                }
                className="flex-1 rounded-md p-2"
              />
            </div>
          </div>
          <Map
            height="[480px]"
            weight="full"
            zoom={14}
            show={false}
            onMarkerClick={onMarkerClick}
            shadow={"sm"}
          />
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="name">Poster (1920 x 1080)</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                if (e.target.files.length === 0) return;
                setForm({
                  ...form,
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
          Buat Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
