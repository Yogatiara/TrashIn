const ServiceCard = () => {
  return (
    <>
      <div className="flex gap-6 justify-center font-montserrat">
        <div className="bg-white w-2/6 h-44 p-4 rounded-tl-2xl rounded-md shadow-xl">
          <img
            className="w-12"
            src="./icons/map.png"
            alt="map icon"
          />
          <h1 className="text-lg font-bold ">
            Lokasi TPS Ilegal
          </h1>
        </div>
        <div className="bg-white w-2/6 h-44 p-4 rounded-tl-2xl rounded-md  shadow-xl">
          <img
            className="w-12"
            src="./icons/volunteer.png"
            alt="volunteer icon"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
