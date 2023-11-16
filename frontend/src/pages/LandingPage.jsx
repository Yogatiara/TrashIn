import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServiceCard from "../components/cards/ServiceCard";
import LogoFrame from "../components/LogoFrame";
import AboutUsCard from "../components/cards/AboutUsCard";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#2FC8B0] w-full h-full ">
        <Navbar />
        <Banner />
        <div className="mt-72 place-content-center font-montserrat ">
          <h1 className="text-3xl font-bold text-[#004E64]  text-center ">
            Layanan yang kami berikan
          </h1>

          <div className="pt-16">
            <ServiceCard />
          </div>
        </div>

        <div className="flex justify-center mt-72 space-x-16 font-montserrat ">
          <div>
            <LogoFrame />
          </div>

          <div className="mt-1 mb-52">
            <h1 className="text-3xl font-bold text-[#004E64]  ">
              Tentang kami
            </h1>
            <div className="mt-10">
              <AboutUsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
