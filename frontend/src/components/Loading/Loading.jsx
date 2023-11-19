import { ScaleLoader } from "react-spinners";

import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div>
        <div className=" z-1 absolute  position-fixed  bottom-50 end-50">
          <ScaleLoader color={"#000000"} loading={true} size={20} />
        </div>
        <span className="overlay" />
      </div>
    </>
  );
};

export default Loading;
