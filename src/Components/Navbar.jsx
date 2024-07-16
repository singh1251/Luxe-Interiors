import { useContext, useState } from "react";
import { StoreContext } from "../Contexts/StoreContext";
import { Resources } from "../assets/Resources";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setShowLogin }) {
  const { cartItems } = useContext(StoreContext);

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [search, setSearch] = useState("");

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const [isSelected, setIsSelected] = useState("Home");

  const activeDecoration = "underline decoration-[#774000]";
  const inActiveDecoration = "no-underline";

  return (
    <>
      <section className="flex flex-wrap justify-center">
        <section className="w-[90%] flex justify-between py-2">
          <div
            onClick={() => setIsSelected("Home")}
            className="hover:scale-[1.05]"
          >
            <Link to="/" className="font-bold text-2xl leading-loose">
              LuxeInteriors
            </Link>
          </div>

          <nav className="w-[32%] hidden tablet:flex items-center">
            <ul className="text-center text-gray-500 flex grow justify-between">
              <li
                onClick={() => setIsSelected("Home")}
                className={`${
                  isSelected === "Home" && activeDecoration
                } hover:scale-[1.05]`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => setIsSelected("About")}
                className={`${
                  isSelected === "About" && activeDecoration
                } hover:scale-[1.05]`}
              >
                <a href="#footer">About</a>
              </li>
              <li
                onClick={() => setIsSelected("Shop")}
                className={`${
                  isSelected === "Shop" && activeDecoration
                } hover:scale-[1.05]`}
              >
                <Link to="/">Shop</Link>
              </li>
              <li
                onClick={() => setIsSelected("Contact")}
                className={`${
                  isSelected === "Contact" && activeDecoration
                } hover:scale-[1.05]`}
              >
                <a href="#footer">Contact-Us</a>
              </li>
            </ul>
          </nav>

          <div className="hidden tablet:flex items-center">
            <div className="flex grow">
              <div className="relative mr-7">
                <input
                  value={search}
                  onChange={(evt) => handleSearch(evt)}
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 py-[6px] pl-3 pr-9 rounded-full"
                />
                <img
                  src={Resources.searchIcon}
                  alt="icon"
                  className="absolute top-[6px] right-2 cursor-pointer hover:scale-[1.05]"
                />
              </div>

              <button
                onClick={() => {
                  navigate("/cart");
                  setIsSelected("Cart");
                }}
                className="relative hover:scale-[1.05]"
              >
                <img
                  src={Resources.shoppingCartIcon}
                  alt="icon"
                  className="mr-5"
                />
                {Object.keys(cartItems).length !== 0 && (
                  <p className="w-[16px] h-[16px] text-xs absolute left-3 bottom-0 bg-[#774000] text-[#ffecd5] rounded-full">
                    {Object.keys(cartItems).length}
                  </p>
                )}
              </button>

              <button
                onClick={() => setShowLogin(true)}
                className="hover:scale-[1.05]"
              >
                <img src={Resources.accountIcon} alt="icon" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen((curr) => !curr)}
            className="tablet:hidden"
          >
            <img src={Resources.listIcon} alt="icon" />
          </button>
        </section>

        <nav
          className={`w-[90%] ${
            isMenuOpen ? "block" : "hidden"
          } tablet:hidden py-4`}
        >
          <ul className="flex flex-col items-center text-gray-500">
            <li
              onClick={() => setIsSelected("Home")}
              className={`${
                isSelected === "Home" && activeDecoration
              } mb-7 hover:scale-[1.05]`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setIsSelected("About")}
              className={`${
                isSelected === "About" && activeDecoration
              } mb-7 hover:scale-[1.05]`}
            >
              <a href="#footer">About</a>
            </li>
            <li
              onClick={() => setIsSelected("Shop")}
              className={`${
                isSelected === "Shop" && activeDecoration
              } mb-7 hover:scale-[1.05]`}
            >
              <Link to="/">Shop</Link>
            </li>
            <li
              onClick={() => setIsSelected("Contact")}
              className={`${
                isSelected === "Contact" && activeDecoration
              } mb-7 hover:scale-[1.05]`}
            >
              <a href="#footer">Contact-Us</a>
            </li>
            <li className="flex justify-between self-stretch mb-4">
              <div className="relative mr-10 grow">
                <input
                  value={search}
                  onChange={(evt) => handleSearch(evt)}
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 w-full py-[6px] pl-3 pr-9 rounded-full"
                />
                <img
                  src={Resources.searchIcon}
                  alt="icon"
                  className="absolute top-[6px] right-2 cursor-pointer hover:scale-[1.05]"
                />
              </div>

              <button
                onClick={() => {
                  navigate("/cart");
                  setIsSelected("Cart");
                }}
                className="relative hover:scale-[1.05]"
              >
                <img
                  src={Resources.shoppingCartIcon}
                  alt="icon"
                  className="mr-5"
                />
                {Object.keys(cartItems).length !== 0 && (
                  <p className="w-[16px] h-[16px] text-xs absolute left-3 bottom-0 bg-[#774000] text-[#ffecd5] rounded-full">
                    {Object.keys(cartItems).length}
                  </p>
                )}
              </button>

              <button
                onClick={() => setShowLogin(true)}
                className="hover:scale-[1.05]"
              >
                <img src={Resources.accountIcon} alt="icon" />
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
