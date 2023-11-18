import Headroom from "react-headroom";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "../components/landingpage/Navbar";
import Banner from "../components/landingpage/Banner";
import ServiceCard from "../components/landingpage/cards/ServiceCard";
import LogoFrame from "../components/landingpage/LogoFrame";
import AboutUsCard from "../components/landingpage/cards/AboutUsCard";
import Map from "../components/landingpage/Map";
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
        <div className="h-screen flex flex-col justify-center place-content-center font-montserrat bg-[#004E64]">
          <h1 className="text-5xl font-bold text-[#2FC8B0] text-center ">
            Layanan yang kami berikan
          </h1>

          <div className="mt-20">
            <ServiceCard />
          </div>
        </div>

        <div className="flex justify-center h-screen gap-12 items-center space-x-16 font-montserrat ">
          <>
            <LogoFrame />
          </>

          <div className="mt-1">
            <h1 className="text-4xl font-bold text-[#004E64]  ">
              Tentang kami
            </h1>
            <div className="mt-10">
              <AboutUsCard />
            </div>
          </div>
        </div>

        <div className="w-full h-screen flex flex-col justfiy-center items-center place-content-center font-montserrat gap-8 bg-[#004E64]">
          <h1 className="text-4xl font-bold text-[#2FC8B0] text-center">
            Lokasi TPS Ilegal
          </h1>

          <div className="w-[66%] h-fit">
            <Map />
          </div>
        </div>

        <div className="h-screen gap-10 flex flex-col justify-center items-center font-montserrat text-center ">
          <h1 className="text-4xl font-bold text-[#004E64]  text-center ">
            Kegiatan bersih lingkungan
          </h1>
          <div className="mx-auto">
            <EventCard />
          </div>
          <a className="text-white mt-4" href="#">
            Lihat selangkapnya....
          </a>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
