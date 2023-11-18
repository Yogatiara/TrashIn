const DownloadButton = () => {
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none 
        hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 w-[265px]"
      >
        <div className="flex items-center space-x-1 ">
          <img className="w-10" src="./icons/google-play.png" alt="" />

          <div className="flex flex-col items-center w-full ">
            <p className="text-sm"> Unduh pada</p>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
      </button>

      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none 
        hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 w-[265px] ml-3"
      >
        <div className="flex items-center space-x-1">
          <img className="w-10" src="./icons/apple-logo.png" alt="" />

          <div className="flex flex-col items-center w-full">
            <p className="text-sm"> Unduh pada</p>
            <p className="font-bold">App Store</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default DownloadButton;
