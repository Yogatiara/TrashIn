import Headroom from "react-headroom";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "../components/landingpage/Navbar";
import Banner from "../components/landingpage/Banner";
import ServiceCard from "../components/landingpage/cards/ServiceCard";
import LogoFrame from "../components/landingpage/LogoFrame";
import AboutUsCard from "../components/landingpage/cards/AboutUsCard";
import Map from "../components/Map";
import ScrollOnTopButton from "../components/landingpage/ScrollOntopButton";
import Footer from "../components/landingpage/Footer";
import EventCard from "../components/landingpage/cards/EventCard";

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
        <div className="mt-60 place-content-center font-montserrat ">
          <h1 className="text-3xl font-bold text-[#004E64]  text-center ">
            Layanan yang kami berikan
          </h1>

          <div className="mt-20">
            <ServiceCard />
          </div>
        </div>

        <div className="flex justify-center mt-60 space-x-16 font-montserrat ">
          <div>
            <LogoFrame />
          </div>

          <div className="mt-1">
            <h1 className="text-3xl font-bold text-[#004E64]  ">
              Tentang kami
            </h1>
            <div className="mt-10">
              <AboutUsCard />
            </div>
          </div>
        </div>

        <div className="w-[770px] mx-auto mt-32 font-montserrat">
          <h1 className="text-3xl font-bold text-[#004E64] text-center  ">
            Lokasi TPS Ilegal
          </h1>

          <div className="mt-16">
            <Map show={false} height={"[450px]"} weight={"full"} zoom={15} />
          </div>
        </div>

        <div className=" mt-48 font-montserrat text-center">
          <h1 className="text-3xl font-bold text-[#004E64]  text-center ">
            Kegiatan bersih lingkungan
          </h1>
          <div className="mt-20 mx-auto">
            <EventCard />
          </div>
          <div className="mt-10">
            <a className="text-white" href="#">
              Lihat selangkapnya....
            </a>
          </div>
        </div>

        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
