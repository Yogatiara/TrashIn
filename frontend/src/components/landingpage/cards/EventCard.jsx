import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

import { getEventData } from "../../../api/fetching";
const EventCard = () => {
  const sliderRef = useRef(null);
  const [eventData, setEventData] = useState([]);

  const slickSettings = {
    className: "w-[1500px] ",
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  useEffect(() => {
    getEventData()
      .then((res) => {
        setEventData(res);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, []);

  // if (eventData.length === 0) {
  //   return;
  // }

  return (
    <>
      {eventData.length === 0 ? (
        <div className="bg-white p-2 rounded-md">Data event belum ada</div>
      ) : (
        <div>
          <div className="flex items-center space-x-4 justify-center font-montserrat">
            <button
              onClick={() => sliderRef?.current?.slickPrev()}
              className="w-10 h-10 bg-white rounded-full"
            >
              <img className="ml-0.5 w-8" src="./icons/left.png" alt="" />
            </button>

            <Slider {...slickSettings} ref={sliderRef}>
              {eventData.map((data, index) => (
                <div key={index}>
                  <div className="bg-white rounded-lg w-[360px] h-[480px] mx-auto relative shadow-sm border-2 border-[#7AE582] ">
                    <img
                      className="rounded-t-lg"
                      src="images/dummy-data-event-poster.jpg"
                      alt=""
                    />
                    <div className="absolute z-1 inset-0 top-[215px] ">
                      <div className="text-white mx-auto bg-[#7AE582] w-32 h-10 font-medium text-lg rounded-md text-center pt-2 shadow-md">
                        Berjalan
                      </div>
                    </div>

                    <div className="px-8 mt-14 flex flex-col justify-center items-start gap-5">
                      <div className="flex items-center space-x-2 ">
                        <img
                          className="w-8"
                          src="./icons/location.png"
                          alt=""
                        />

                        <div>
                          <p className="text-lg">{data.gather_point}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-8"
                          src="./icons/calendar.png"
                          alt=""
                        />

                        <div>
                          <p className="text-lg">{data.start_at}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img className="w-9" src="./icons/people.png" alt="" />

                        <div>
                          <p className="text-lg">{data.quota} Orang</p>
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
          <a className="text-white mt-4 text-2xl" href="#">
            Lihat selangkapnya....
          </a>
        </div>
      )}
    </>
  );
};

export default EventCard;
