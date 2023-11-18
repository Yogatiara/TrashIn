import DownloadButton from "./DownloadButton";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="h-full absolute w-full">
          <img
            className="object-cover w-full h-full brightness-50 "
            src="./images/tpa.png"
            alt="tpa image"
          />
        </div>
        <div className="h-full flex flex-col justify-center px-24 drop-shadow-2xl">
          <h1
            style={{
              WebkitTextStroke: "1px #004E64",
            }}
            className="  text-white text-7xl font-extrabold "
          >
            TrashIn
          </h1>

          <div className="w-[700px]">
            <p className="text-white text-2xl pt-2 font-medium ">
              Informasi terkait TPS Ilegal disekitar anda serta layanan untuk
              menjadi volunteers Kebersihan
            </p>
          </div>

          <div className="mt-6">
            <DownloadButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
