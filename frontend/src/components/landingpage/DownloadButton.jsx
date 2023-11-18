const DownloadButton = () => {
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none 
        hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-[165px]"
      >
        <div className="flex items-center space-x-2">
          <img
            className="w-9"
            src="./icons/google-play.png"
            alt=""
          />

          <div>
            <p className="text-xs pr-3"> Unduh pada</p>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
      </button>

      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none 
        hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-[165px] ml-3"
      >
        <div className="flex items-center space-x-2">
          <img
            className="w-9"
            src="./icons/apple-logo.png"
            alt=""
          />

          <div>
            <p className="text-xs pr-3"> Unduh pada</p>
            <p className="font-bold pr-3">App Store</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default DownloadButton;
