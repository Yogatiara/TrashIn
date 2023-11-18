import Map from "../../components/Map";
import QuantityInformationCard from "../../components/dashboard/QuantityInformationCard";

const Home = () => {
  return (
    <>
      <div className="font-montserrat text-gray-600 drop-shadow-lg">
        <div className=" flex items-center space-x-3">
          <h1 className="font-bold text-5xl">Hai Admin</h1>
          <img className="w-12" src="./icons/wave.png" alt="" />
        </div>

        <div className="mt-2.5">
          <p className="text-3xl font-medium">
            Selamat datang di dashboard TrashIn
          </p>
        </div>

        <div className="flex items-center space-x-10">
          <div className="mt-10 w-[1000px] h-[700px]">
            <Map show={true} height={"full"} weight={"full"} zoom={13} />
          </div>

          <div className="mt-10 text-2xl">
            <QuantityInformationCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
