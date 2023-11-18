/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import api from "../../../api/api";
import { Link } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Data Event Volunteer</h1>
        <Link to="/dashboard/create-event">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tambah Event
          </button>
        </Link>
      </div>
      <MaterialReactTable table={materialTable} />
    </>
  );
};

export default ListEvent;
