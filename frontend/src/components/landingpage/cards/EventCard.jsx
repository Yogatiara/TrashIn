import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const EventCard = () => {
  const sliderRef = useRef(null);

  const slickSettings = {
    className: "w-[800px] ",
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  const dummy = [
    {
      url: "./assets/dome.jpg",
      nama1: "BSCC",
      nama2: "Dome Balikpapan",
      desk: "Gedung ini mampu menampung sekitar 5000 orang dengan sirkulasi 40 persen. Lantai dasar dapat menampung 60 stan pameran dan lantai dua 30 stan pameran. Kapasitas tempat duduk adalah lebih dari 2500 dan untuk area tribun 824 penonton biasa dan 160 orang penonton/ tamu VIP.",
    },
    {
      url: "./assets/krb.png",
      nama1: "Kebun",
      nama2: "Raya Balikpapan",
      desk: "Kebun Raya Balikpapan merupakan salah satu objek wisata di kota Balikpapan dan memiliki kawasan bumi perkemahan yang biasa digunakan oleh komunitas-komunitas tertentu. Pemerintah Kota Balikpapan bekerjasama dengan Pusat Konservasi Tumbuhan Kebun Raya Bogor dan Balai Besar Penelitian Dipterocarpaceae Dephut untuk kegiatan pembangunan Kebun Raya Balikpapan.",
    },
    {
      url: "./assets/pantai-manggar.png",
      nama1: "Pantai",
      nama2: "Manggar Balikpapan",
      desk: "Kawasan pantai ini biasa digunakan untuk mengadakan festival yang memiliki massa yang besar dengan nuansa pesisir pantai dan beberapa tempat cocok untuk healing",
    },
    {
      url: "./assets/dome.jpg",
      nama1: "BSCC",
      nama2: "Dome Balikpapan",
      desk: "Gedung ini mampu menampung sekitar 5000 orang dengan sirkulasi 40 persen. Lantai dasar dapat menampung 60 stan pameran dan lantai dua 30 stan pameran. Kapasitas tempat duduk adalah lebih dari 2500 dan untuk area tribun 824 penonton biasa dan 160 orang penonton/ tamu VIP.",
    },
    {
      url: "./assets/krb.png",
      nama1: "Kebun",
      nama2: "Raya Balikpapan",
      desk: "Kebun Raya Balikpapan merupakan salah satu objek wisata di kota Balikpapan dan memiliki kawasan bumi perkemahan yang biasa digunakan oleh komunitas-komunitas tertentu. Pemerintah Kota Balikpapan bekerjasama dengan Pusat Konservasi Tumbuhan Kebun Raya Bogor dan Balai Besar Penelitian Dipterocarpaceae Dephut untuk kegiatan pembangunan Kebun Raya Balikpapan.",
    },
  ];

  return (
    <>
      <div className="flex items-center space-x-4 justify-center font-montserrat">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="w-10 h-10 bg-white rounded-full"
        >
          <img className="ml-0.5 w-8" src="./icons/left.png" alt="" />
        </button>

        <Slider {...slickSettings} ref={sliderRef}>
          {dummy.map((image, index) => (
            <div key={index}>
              <div className="bg-white rounded-lg w-60 h-80 mx-auto relative shadow-sm border-2 border-[#7AE582] ">
                <img
                  className="rounded-t-lg"
                  src="images/dummy-data-event-poster.jpg"
                  alt=""
                />
                <div className="absolute z-1 inset-0 top-[140px] ">
                  <div className="text-white mx-auto bg-[#7AE582] w-32 h-10 font-medium text-sm rounded-md text-center pt-2.5 shadow-md">
                    Berjalan
                  </div>
                </div>

                <div className="px-8 mt-10">
                  <div className="flex items-center space-x-2 ">
                    <img className="w-4" src="./icons/location.png" alt="" />

                    <div>
                      <p className="text-sm">lokasi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 ">
                    <img className="w-4" src="./icons/calendar.png" alt="" />

                    <div>
                      <p className="text-sm">tanggal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 ">
                    <img className="w-5" src="./icons/people.png" alt="" />

                    <div>
                      <p className="text-sm">2 orang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="w-10 h-10 bg-white rounded-full"
        >
          <img className="ml-1 w-8" src="./icons/right.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default EventCard;
