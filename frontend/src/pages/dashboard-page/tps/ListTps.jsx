/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import api from "../../../api/api";
import { Link } from "react-router-dom";

const ListTps = () => {
  const [tps, setTps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/tps", {
        params: {
          withUser: true,
        },
      })
      .then((res) => {
        setTps(res.data.data);
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
        accessorKey: "address",
        header: "Nama",
      },
      {
        accessorKey: "is_clean",
        header: "Status",
        Cell: ({ row }) => {
          return (
            <>
              {row.original.is_clean ? (
                <span className="text-green-500">Bersih</span>
              ) : (
                <span className="text-red-500">Belum bersih</span>
              )}
            </>
          );
        },
      },
      {
        accessorKey: "notes",
        header: "Catatan",
        maxSize: 600,
        size: 180,
      },
      {
        accessorKey: "user.name",
        header: "Diinput oleh user",
      },
    ],
    []
  );

  const materialTable = useMaterialReactTable({
    columns: table,
    data: tps,
    enableFullScreenToggle: false,
    positionActionsColumn: "last",
    enableRowActions: true,
    renderRowActions: ({ row }) => {
      return (
        <div className="flex flex-row gap-2">
          <Link to={`/dashboard/list-tps/${row.original.id}`}>
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
      <div className="text-5xl font-bold animate-pulse italic ">
        Loading.....
      </div>
    );
  }

  return (
    <>
      {/* <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Data Event Volunteer</h1>
        <Link to="/dashboard/list-event/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tambah Event
          </button>
        </Link>
      </div> */}
      <div className="font-montserrat text-gray-600 drop-shadow-lg">
        <div className=" flex items-center space-x-3 mb-7">
          <h6 className="font-bold text-5xl">Data TPS Ilegal</h6>
        </div>
        <MaterialReactTable table={materialTable} />
      </div>
    </>
  );
};

export default ListTps;
