import Headroom from "react-headroom";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServiceCard from "../components/cards/ServiceCard";
import LogoFrame from "../components/LogoFrame";
import AboutUsCard from "../components/cards/AboutUsCard";
import Map from "../components/Map";
import ScrollOnTopButton from "../components/ScrollOntopButton";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#2FC8B0] w-full h-full ">
        <ScrollOnTopButton ScrollToTop={ScrollToTop} />
        <div className="absolute  w-full">
          <Headroom>
            <Navbar />
          </Headroom>
        </div>
        <Banner />
        <div className="mt-72 place-content-center font-montserrat ">
          <h1 className="text-3xl font-bold text-[#004E64]  text-center ">
            Layanan yang kami berikan
          </h1>

          <div className="mt-16">
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

        <div className="w-[770px] mx-auto font-montserrat">
          <h1 className="text-3xl font-bold text-[#004E64] text-center  ">
            Lokasi TPS Ilegal
          </h1>

          <div className="mt-16">
            <Map />
          </div>
        </div>

        <div className="mt-60">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
