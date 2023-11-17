const Sidebar = () => {
  return (
    <div className="fixed w-72 h-full top-0 start-0 bg-green-600">
      <a href="https://flowbite.com/" className="flex items-center justify-between gap-1.5 ps-2.5 mb-8 mt-6 ml-8">
        <img
          className="h-6 sm:h-7 scale-150"
          src="./images/Logo-TrashIn.png"
          alt="Logo"
        />
        <span className="whitespace-nowrap font-black scale-2 mr-10 mt-2">
            <img src="./images/rashIn.png" alt="" />  
        </span>
      </a>
    </div>
  );
};

export default Sidebar;
