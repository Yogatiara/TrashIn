import { useState } from "react";
import Map from "../../../components/Map";

const CreateEvent = () => {
  const [tps, setTps] = useState(null);
  console.log(tps);
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-3">Buat Event</h1>

      <form className="flex flex-col gap-2">
        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Nama Event</label>
            <input
              type="text"
              name="name"
              id="name"
              className="flex-1 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Tanggal Mulai</label>
            <input
              type="date"
              name="date"
              id="date"
              className="flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Tanggal Selesai</label>
            <input
              type="date"
              name="date"
              id="date"
              className="flex-1 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">Catatan</label>
            <input
              type="text"
              name="name"
              id="name"
              className="flex-1 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center w-full">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name">TPS</label>
            <input
              type="text"
              name="name"
              id="name"
              className="flex-1 rounded-md p-2"
              placeholder="Harap pilih tps dengan menekan tanda lokasi tps yang tertera di map di bawah."
            />
            <Map
              height="[480px]"
              weight="full"
              zoom={14}
              show={false}
              onMarkerClick={setTps}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
