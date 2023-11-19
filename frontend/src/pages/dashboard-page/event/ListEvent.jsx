/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import api from "../../../api/api";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

const ListEvent = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/event", {
        params: {
          withTPS: true,
        },
      })
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const table = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        sortDescFirst: true,
      },
      {
        accessorKey: "name",
        header: "Nama",
      },
      {
        accessorKey: "notes",
        header: "Catatan",
      },
      {
        accessorKey: "quota",
        header: "Kuota",
        Cell: ({ row }) => {
          return (
            <>
              {row.original._count.user_join_event} / {row.original.quota}
            </>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "tps.address",
        header: "TPS (Jl.)",
      },
    ],
    []
  );

  const materialTable = useMaterialReactTable({
    columns: table,
    data: events,
    enableFullScreenToggle: false,
    positionActionsColumn: "last",
    enableRowActions: true,
    renderRowActions: ({ row }) => {
      return (
        <div className="flex flex-row gap-2">
          <Link to={`/dashboard/list-event/${row.original.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Lihat
            </button>
          </Link>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Hapus
          </button>
        </div>
      );
    },
  });

  if (isLoading) {
    return (
      <>
        <div className="text-5xl font-bold animate-pulse italic ">
          Loading.....
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-montserrat text-gray-600 drop-shadow-lg ">
        <div className="flex flex-row items-center justify-between mb-12">
          <div className=" flex items-center space-x-3">
            <h6 className="font-bold text-5xl">Data user</h6>
          </div>{" "}
        </div>
        <Link
          to="/dashboard/list-event/create"
          className="flex justify-between mb-6"
        >
          <div></div>
          <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">
            Tambah Event
          </button>
        </Link>
        <MaterialReactTable table={materialTable} />
      </div>
    </>
  );
};

export default ListEvent;
