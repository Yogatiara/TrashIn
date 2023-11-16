import DownloadButton from "./DownloadButton";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[512px]">
        <div>
          <img
            className="object-cover w-full h-[655px] brightness-50 "
            src="./images/tpa.png"
            alt="tpa image"
          />
        </div>
      </div>
      <div className="absolute top-52 left-[85px] drop-shadow-2xl">
        <h1
          style={{
            WebkitTextStroke: "2px #004E64",
          }}
          className="  text-white text-6xl font-extrabold "
        >
          TrashIn
        </h1>

        <div className="w-[546px]">
          <p className="text-white text-xl pt-2 font-medium ">
            Informasi terkait TPS Ilegal disekitar anda serta Layanan untuk
            menjadi Volunteers Kebersihan
          </p>
        </div>

        <div className="mt-6">
          <DownloadButton />
        </div>
      </div>
    </>
  );
};

export default Banner;
