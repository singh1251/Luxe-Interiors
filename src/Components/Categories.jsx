import { Link } from "react-router-dom";
import { Resources } from "../assets/Resources";
import { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";

export default function Categories() {
  const { setSelected } = useContext(StoreContext);

  return (
    <section className="flex flex-wrap justify-center">
      <section className="w-[90%] flex flex-wrap mb-20">
        <div className="mb-10 w-full">
          <p className="text-5xl text-center font-bold mb-3">Categories</p>
          <p className="text-gray-500 text-center">
            Crafted with love specially for you
          </p>
        </div>

        <div className="w-full mb-20 flex flex-wrap tablet:justify-between">
          <div
            onClick={() => setSelected("Categories")}
            className="tablet:w-[30%] mb-10 tablet:mb-0"
          >
            <Link to="/sleeperSofaCollection">
              <img
                src={Resources.sleeperSofa}
                alt="image"
                className="w-full rounded-2xl"
              />
              <p className="text-xl text-center">Sleeper Sofas</p>
            </Link>
          </div>

          <div
            onClick={() => setSelected("Categories")}
            className="tablet:w-[30%] mb-10 tablet:mb-0"
          >
            <Link to="/loveseatCollection">
              <img
                src={Resources.loveseat}
                alt="image"
                className="w-full rounded-2xl"
              />
              <p className="text-xl text-center">Loveseats</p>
            </Link>
          </div>

          <div
            onClick={() => setSelected("Categories")}
            className="tablet:w-[30%] mb-10 tablet:mb-0"
          >
            <Link to="/daybedCollection">
              <img
                src={Resources.daybed}
                alt="image"
                className="w-full rounded-2xl"
              />
              <p className="text-xl text-center">Daybeds</p>
            </Link>
          </div>
        </div>

        <div
          onClick={() => setSelected("Categories")}
          className="w-full flex flex-wrap tablet:justify-between"
        >
          <div className="tablet:w-[30%] mb-10 tablet:mb-0">
            <Link to="/sectionalCollection">
              <img
                src={Resources.sectional}
                alt="image"
                className="w-full rounded-2xl"
              />
              <p className="text-xl text-center">Sectionals</p>
            </Link>
          </div>

          <div
            onClick={() => setSelected("Categories")}
            className="tablet:w-[30%] mb-10 tablet:mb-0"
          >
            <Link to="/officeSofaCollection">
              <img
                src={Resources.officeSofa}
                alt="image"
                className="w-full rounded-2xl"
              />
              <p className="text-xl text-center">Office Sofas</p>
            </Link>
          </div>

          <div
            onClick={() => setSelected("Categories")}
            className="tablet:w-[30%] mb-10 tablet:mb-0"
          >
            <Link to="/chairCollection">
              <img
                src={Resources.chair}
                alt="image"
                className="w-full rounded-2xl"
              />
              <p className="text-xl text-center">Chairs</p>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
