import { useState } from "react";

const Navbar = () => {

  const [showMe, setShowMe] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

  return (
    <header className="text-gray-600 body-font  fixed bg-white w-full">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Italo Bejarano</span>
        </a>

        <div className="block ml-auto mb-4 md:mb-0 lg:hidden">
          <button
            onClick={toggle}
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <nav
          id="nav-content"
          style={{display: showMe? "none" : "flex" }}
          className="hidden flex-col w-full items-end lg:w-auto lg:flex lg:flex-row md:ml-auto flex-wrap lg:items-center text-base justify-center  "
        >
          <a onClick={toggle} className="mr-5 hover:text-gray-900" href="#presentacion">
            ¿Quien soy?
          </a>
          <a onClick={toggle} className="mr-5 hover:text-gray-900" href="#webs">
            Webs
          </a>
          <a onClick={toggle} className="mr-5 hover:text-gray-900" href="#experiencia">
            Experiencia Profesional
          </a>
          <a onClick={toggle} className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
      </div>
    </header>
  );
}; 

export default Navbar;
