import { Link } from "react-router-dom";
import { Resources } from "../assets/Resources";
import { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";

export default function Breadcrumbs({ links = [] }) {
  const { setSelected } = useContext(StoreContext);

  return (
    <div className="bg-gray-200 py-6 flex justify-center">
      <ul className="w-full ml-5 sm:ml-0 sm:w-[90%] text-xs sm:text-sm font-semibold">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              onClick={index === 0 ? () => setSelected("Home") : undefined}
              className="inline-block"
            >
              <Link to={link.path}>{link.label}</Link>
              {index !== links.length - 1 && (
                <img
                  src={Resources.upArrow}
                  alt="icon"
                  className="inline-block rotate-90 w-[15px] h-[15px] ml-1 mr-3"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
