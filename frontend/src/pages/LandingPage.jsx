import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#2FC8B0] w-full h-full ">
        <Navbar />
        <Banner />
        <div className="mt-60 place-content-center font-montserrat">
          <h1 className="text-3xl font-bold text-[#004E64]  text-center ">
            Our Service
          </h1>
          <div className="pb-16 pt-10">
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
