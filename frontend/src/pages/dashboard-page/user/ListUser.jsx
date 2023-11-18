import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useState } from "react";

import { getUserData } from "../../../api/fetching";
import Button from "../../../components/dashboard/button";

const ListUser = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData()
      .then((res) => {
        setUserData(res);
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
        accessorKey: "name", //access nested data with dot notation
        header: "Nama",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "phone_number",
        header: "No Telepon",
        size: 150,
      },
      {
        accessorKey: "roles.name",
        header: "Role",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: userData,
    enableFullScreenToggle: false,
    positionActionsColumn: "last",
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Button to={`/dashboard/list-user/${row.original.id}`} />
    ),
  });

  if (userData.length === 0) {
    return;
  }

  return (
    <>
      <div className="font-montserrat text-gray-600 drop-shadow-lg">
        <div className=" flex items-center space-x-3">
          <h6 className="font-bold text-5xl">Data user</h6>
        </div>

        <div className="mt-9">
          <MaterialReactTable table={table} />;
        </div>
      </div>
    </>
  );
};

export default ListUser;
