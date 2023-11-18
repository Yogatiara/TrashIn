import Map from "../../components/Map";
import QuantityInformationCard from "../../components/dashboard/QuantityInformationCard";

const Home = () => {
  return (
    <>
      <div className="font-montserrat text-gray-600 drop-shadow-lg">
        <div className=" flex items-center space-x-3">
          <h6 className="font-bold text-2xl">Hai Admin</h6>
          <img className="w-10" src="./icons/wave.png" alt="" />
        </div>

        <div className="mt-2.5">
          <p className="text-md font-medium">
            Selamat datang di dashboard TrashIn
          </p>
        </div>

        <div className="flex items-center  justify-between">
          <div className="mt-4 w-[620px] h-[450px]">
            <Map show={true} height={"full"} weight={"full"} zoom={12} />
          </div>

          <div className="mt-5">
            <QuantityInformationCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
