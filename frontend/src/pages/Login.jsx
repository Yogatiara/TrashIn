import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <aside style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="sidebar">
        <div className="h-screen flex flex-col justify-center bg-[#2FC8B0]">
          <div
            href="/"
            className="flex items-center justify-center ps-2.5 gap-1.5 mb-9 mt-6 ml-8"
          >
            <img
              className="h-16 sm:h-10 scale-150"
              src="./images/Logo-TrashIn.png"
              alt="Logo"
            />
            <span className="whitespace-nowrap font-black scale-0.5 mr-10 mt-2">
              <img src="./images/rashIn.png" alt="" />
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="content" style={{ flex: 6 }}>
        <img
          className="object-cover w-full h-full"
          src="./images/logintps.jpg"
          alt="tps image"
        />
      </div>
    </aside>
  );
};

export default Login;
