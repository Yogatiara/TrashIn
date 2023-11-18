/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ to }) => {
  return (
    <>
      <div className="flex items-center">
        <Link
          to={to}
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          lihat
        </Link>
        <Link
          to={to}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          delete
        </Link>
      </div>
    </>
  );
};

export default Button;
