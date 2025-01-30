import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, CircleUser, X } from "lucide-react";
import LoginCard from "./LoginCard";
import logo from "../assets/Logo/logo.png";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "FQA",
    path: "FQA",
  },
  {
    label: "EXPLORE",
    path: "EXPLORE",
  },
];
const Navbar = (prop) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginCardShow, setIsLoginCardShow] = useState(false);
  const [user, setUser] = useState(null);
  function handleLoginForm(prop) {
    setIsLoginCardShow(!isLoginCardShow);
    console.log(prop)
  }
  return (
    <>
      <nav className="bg-[#212121] border-[#212121] dark:bg-gray-900 h-[92px] w-full left-0 top-0 fixed z-50">
        <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex justify-center items-center">
            <img src={logo} className="h-12" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              DenFlick
            </span>
          </Link>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="text-white md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <div
            className={`${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            } absolute left-0 top-12 w-full bg-[#212121] md:static  md:flex md:w-auto md:bg-transparent transition-tran duration-300 ease-in-out z-50`}
          >
            <ul className="flex flex-col md:flex-row bg-[#212121]  md:bg-transparen md:items-center md:p-0 mt-4 md:mt-0">
              {links.map((link) => (
                <li
                  onClick={() => setIsMenuOpen(false)}
                  key={link.label}
                  className="py-2 px-3"
                >
                  <Link
                    to={link.path}
                    className="text-white hover:text-yellow-500 font-bold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="py-2 px-3">
                <button className="text-white hover:text-yellow-500">
                  <Search />
                </button>
              </li>
              <li className="py-2 px-3">
                <button
                  onClick={handleLoginForm}
                  className="text-white w-full gap-2 px-3 py-2 item-start flex hover:bg-yellow-500 border rounded-sm font-bold md:p-1 md:gap-3"
                >
                  <CircleUser />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isLoginCardShow && (
          <div className="fixed top-52 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-90 flex justify-center items-center z-50">
            <LoginCard prop={is} />
            <button
              onClick={() => setIsLoginCardShow(false)}
              className="absolute top-2 right-5 md:right-2 text-red-600"
            >
              <X />
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
