const Navbar = () => {
  return (
    <>
      <nav className=" z-20 top-0 start-0 max-w-screen flex flex-wrap items-center justify-between mr-16 ml-16 p-4 ">
        <a href="" className="flex items-center space-x-0.5 ">
          <img
            src="./images/Logo-TrashIn.png"
            className="h-20"
            alt="TrashIN Logo"
          />

          <span className=" whitespace-nowrap  font-black mt-3">
            <img src="./images/rashIn.png" alt="" />
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  p-1 ">
          <button
            type="button"
            className="text-white z-100 animate-pulse
              bg-[#004E64] hover:bg-[#004e64ab] focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <div className="flex items-center space-x-2">
              <div>Hubungi kami</div>

              <img className="w-5" src="./icons/whatsapp.png" alt="" />
            </div>
          </button>
          {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2  mt-4 font-bold text-lg opacity-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded  hover:text-gray-300 md:hover:bg-transparent md:p-0  "
              >
                Tentang kami
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 md:hover:bg-transparent md:p-0  "
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 md:hover:bg-transparent  md:p-0  "
              >
                Kontak
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 md:hover:bg-transparent  md:p-0  "
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
