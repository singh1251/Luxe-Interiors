import { useContext, useState } from "react";
import { StoreContext } from "../Contexts/StoreContext";
import { Resources } from "../assets/Resources";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ setShowLogin }) {
  const [search, setSearch] = useState("");

  const { cartItems } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <header className="flex justify-center">
      <section className="w-full sm:w-[90%] my-2 mb-4 flex flex-wrap tablet:flex-nowrap justify-between items-center">
        <div className="w-full tablet:w-[15%] flex justify-center tablet:justify-normal items-center">
          <Link to="/">
            <span className="font-bold text-2xl leading-loose">
              LuxeInteriors
            </span>
          </Link>
        </div>

        <nav className="w-full tablet:w-[40%]">
          <ul className="flex flex-wrap tablet:flex-nowrap justify-center">
            <li className="w-full text-center my-4 text-gray-500">
              <Link to="/">Home</Link>
            </li>
            <li className="w-full text-center my-4 text-gray-500">
              <a href="#footer">About</a>
            </li>
            <li className="w-full text-center my-4 text-gray-500">
              <Link to="/">Shop</Link>
            </li>
            <li className="w-full text-center my-4 text-gray-500">
              <a href="#footer">Contact-Us</a>
            </li>
          </ul>
        </nav>

        <div className="w-full tablet:w-[30%] flex justify-center items-center mt-5 tablet:mt-0">
          <form action="#nowhere" className="relative mr-10">
            <input
              onChange={handleChange}
              type="text"
              value={search}
              placeholder="Search"
              className="p-2 pl-5 w-full rounded-full bg-gray-100"
            />
            <button type="button" className="absolute top-1 right-1">
              <img
                src={Resources.searchIcon}
                alt="icon"
                className="inline-block"
              />
            </button>
          </form>

          <button onClick={() => navigate("/cart")} className="mr-5 relative">
            <img
              src={Resources.shoppingCartIcon}
              alt="icon"
              className="inline-block"
            />
            {Object.keys(cartItems).length !== 0 && (
              <p className="w-[16px] h-[16px] text-xs absolute left-3 top-4 bg-[#774000] text-[#ffecd5] rounded-full">
                {Object.keys(cartItems).length}
              </p>
            )}
          </button>

          <button onClick={() => setShowLogin(true)}>
            <img
              src={Resources.accountIcon}
              alt="icon"
              className="inline-block"
            />
          </button>
        </div>
      </section>
    </header>
  );
}
