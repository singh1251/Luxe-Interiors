import { Link } from "react-router-dom";
import { Resources } from "../assets/Resources";

export default function Breadcrumbs({ links = [] }) {
  return (
    <div className="bg-gray-200 py-6 flex justify-center">
      <ul className="w-full ml-5 sm:ml-0 sm:w-[90%] text-xs sm:text-sm font-semibold">
        {links.map((link, index) => {
          return (
            <li key={index} className="inline-block">
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
