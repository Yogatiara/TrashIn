const QuantityInformationCard = () => {
  return (
    <>
      <div className="bg-[#33DDC3] w-96 h-[215px] p-6 shadow-xl font-montserrat rounded-xl">
        <h1 className="font-bold text-md">Informasi jumlah TPS ilegal</h1>

        <div>
          <div className="text-md mt-6 font-medium">
            <div>
              <p>
                Jumlah tps: <span className="font-bold">5</span> tps
              </p>
            </div>
            <div>
              <p>
                Jumlah tps yang dibersihkan:{" "}
                <span className="font-bold">2</span> tps
              </p>
            </div>
          </div>
        </div>

        <div className="flex pl-auto mt-9 justify-between">
          <div></div>

          <div>
            <svg
              className="w-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-7 space-x-6 text-center">
        <div className="bg-[#33DDC3] w-44 h-52  shadow-xl rounded-xl p-3.5">
          <p className="font-bold">Jumlah User</p>
          <p className="text-3xl mt-12 font-medium">30</p>
          <div className="flex justify-between mt-9">
            <div></div>
            <svg
              className="w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 18"
            >
              <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
          </div>
        </div>
        <div className="bg-[#33DDC3] w-44 h-52  shadow-xl rounded-xl p-3.5">
          <p className="font-bold">Jumlah Kegiatan</p>
          <p className="text-3xl mt-12 font-medium">30</p>
          <div className="flex justify-between mt-9">
            <div></div>
            <svg
              className="w-6 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantityInformationCard;
