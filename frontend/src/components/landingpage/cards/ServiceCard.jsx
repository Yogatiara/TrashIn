const ServiceCard = () => {
  return (
    <>
      <div className="flex gap-16 justify-center font-montserrat">
        <div className="bg-white w-2/6 h-80 flex flex-col justify-around gap-3 p-6 rounded-tl-3xl rounded-lg shadow-xl hover:scale-110 ease-in-out duration-300 ">
          <img className="w-20 h-20" src="./icons/map.png" alt="map icon" />
          <h1 className="text-3xl font-bold pt-2  ">Lokasi TPS Ilegal</h1>
          <p className="text-xl">
            Lokasi tps ilegal yang dilaporkan oleh masyarakat akan ditampilkan
            pada map beserta informasi tambahan{" "}
          </p>
        </div>
        <div className="bg-white w-2/6 h-80 flex flex-col justify-around gap-3 p-6 rounded-tl-3xl rounded-lg shadow-xl hover:scale-110 ease-in-out duration-500">
          <img
            className="w-20 h-20"
            src="./icons/volunteer.png"
            alt="volunteer icon"
          />
          <h1 className="text-3xl font-bold pt-2  ">Mendaftar Volunteer</h1>
          <p className="text-xl">
            Masyarakat dapat berkontrbusi langsung untuk menjadi volenteer
            kebersihan kota Tenggarong{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
