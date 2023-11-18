const Navbar = () => {
  return (
    <>
      <nav className="bg-[#004E64] fixed w-full top-0 z-50 p-[30px] shadow-md border-b-[#2FC8B0] border-b box-border font-montserrat">
        <div className="max-w-screen flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center   justify-center ">
            <img className="w-12" src="/images/Logo-TrashIn.png" alt="Logo" />
            <span className="">
              <img className="w-36 mt-2.5" src="/images/rashIn.png" alt="" />
            </span>
          </a>
          <div className="flex items-center space-x-3 font-medium text-white">
            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-16 h-16 text-gray-400 -right-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-xl">
              <p>Admin12</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
