import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
    console.log("lakdfj");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <section className="bg-blue-900 font-poppins">
        <div className="max-w-6xl px-4 mx-auto">
          <nav className="flex items-center justify-between py-3">
            <a
              href="/"
              className="text-3xl font-semibold leading-none text-gray-200  "
            >
              Logo
            </a>
            <div className="lg:hidden">
              <button
                onClick={handleOpen}
                className="flex items-center px-3 py-2 text-blue-200 border border-blue-200 rounded z-50 relative hover:text-blue-300 hover:border-blue-300 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-200   hover:text-blue-200  "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-200   hover:text-blue-200  "
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-200   hover:text-blue-200  "
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-200   hover:text-blue-200  "
                >
                  Blog{" "}
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-200   hover:text-blue-200  "
                >
                  Testimonials
                </a>
              </li>
            </ul>
            <div className="hidden lg:block">
              <button
                onClick={handleLogout}
                className="inline-block px-4 py-3 mr-2 text-xs font-medium leading-none text-gray-100 border border-gray-200 rounded-full     hover:bg-blue-200   hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </nav>
          {/* Mobile Sidebar */}
          <div className="fixed inset-0 w-full bg-gray-900 opacity-25  lg:hidden"></div>
          <div
            className={`absolute inset-0  h-screen p-3 text-gray-700 duration-500 transform shadow-md  bg-blue-50 w-80  ${
              open ? " left-0 z-[9999]" : "-left-[1000px]"
            } lg:hidden lg:transform-none lg:relative `}
          >
            <div className="flex justify-between px-5 py-2">
              <a className="text-2xl font-bold  " href="/">
                Logo
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md hover:text-blue-300 lg:hidden  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <ul className="px-5 text-left mt-7">
              <li className="pb-3">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-400  "
                >
                  Home
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-400  "
                >
                  About us
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-400  "
                >
                  Features
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-400  "
                >
                  Blog{" "}
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-400  "
                >
                  Testimonials
                </a>
              </li>
            </ul>
            <div className="flex items-center mt-5 lg:hidden">
              <a
                href="/"
                className="inline-block w-full px-4 py-3 mr-2 text-xs font-medium leading-none text-center text-gray-100 bg-blue-800 rounded-full hover:bg-blue-200   hover:text-gray-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
