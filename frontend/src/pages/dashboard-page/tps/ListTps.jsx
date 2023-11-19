import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useState } from "react";

import { getTpsData } from "../../../api/fetching";
import Button from "../../../components/dashboard/button";

const ListTps = () => {
  const [tpsData, setTpsData] = useState([]);

  useEffect(() => {
    getTpsData()
      .then((res) => {
        setTpsData(res);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        sortDescFirst: true,
      },
      {
        accessorKey: "address", //access nested data with dot notation
        header: "Adress",
        size: 150,
      },
      {
        accessorKey: "latitude", //access nested data with dot notation
        header: "Latitude",
        size: 150,
      },
      {
        accessorKey: "longitude", //access nested data with dot notation
        header: "Longitude",
        size: 150,
      },
      {
        accessorKey: "notes",
        header: "Notes",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: tpsData,
    enableFullScreenToggle: false,
    positionActionsColumn: "last",
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Button show={true} to={`/dashboard/list-tps/${row.original.id}`} />
    ),
  });

  return (
    <>
      <div className="font-montserrat text-gray-600 drop-shadow-lg">
        <div className=" flex items-center space-x-3">
          <h6 className="font-bold text-5xl">Data TPS ilegal</h6>
        </div>

        <div className="mt-9">
          <MaterialReactTable table={table} />;
        </div>
      </div>
    </>
  );
};

export default ListTps;
