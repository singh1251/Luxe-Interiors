import { useState } from "react";

import { Resources } from "../assets/Resources";

export default function SortFilter({ categories, handleCategories }) {
  const [sortByO, setSortByO] = useState(true);
  const [filterO, setFilterO] = useState(true);

  const collapseSortBy = () => {
    setSortByO((curr) => !curr);
  };

  const collapseFilter = () => {
    setFilterO((curr) => !curr);
  };

  const [checkboxes, setCheckboxes] = useState({
    "Living Room": false,
    Bedroom: false,
    Office: false,
    Outdoor: false,
  });

  const handleCheckboxes = (evt) => {
    const updatedCbxs = {
      ...checkboxes,
      [evt.target.name]: !checkboxes[evt.target.name],
    };

    setCheckboxes(updatedCbxs);
    handleCategories(updatedCbxs);
  };

  return (
    <section className="w-full tablet:w-[22%] rounded-2xl mb-14 tablet:mb-0">
      <div
        id="sortBy"
        className="w-full mb-8 border border-gray-500 rounded-2xl p-2"
      >
        <div className="flex justify-between mb-3">
          <p className="text-xl">SortBy</p>
          <button
            onClick={collapseSortBy}
            className="bg-gray-200 rounded-full p-[3px]"
          >
            {sortByO ? (
              <img src={Resources.upArrow} alt="icon" />
            ) : (
              <img src={Resources.downArrow} alt="icon" />
            )}
          </button>
        </div>

        <div className={`flex flex-wrap ${sortByO ? "block" : "hidden"}`}>
          <div className="w-full my-4">
            <input type="radio" name="sortBy" id="sortBy1" />
            <label htmlFor="sortBy1" className="ml-2">
              Latest
            </label>
          </div>

          <div className="w-full my-4">
            <input type="radio" name="sortBy" id="sortBy2" />
            <label htmlFor="sortBy2" className="ml-2">
              Popular
            </label>
          </div>

          <div className="w-full my-4">
            <input type="radio" name="sortBy" id="sortBy3" />
            <label htmlFor="sortBy3" className="ml-2">
              Price - Low to High
            </label>
          </div>

          <div className="w-full mt-4 mb-2">
            <input type="radio" name="sortBy" id="sortBy4" />
            <label htmlFor="sortBy4" className="ml-2">
              Price - High to Low
            </label>
          </div>
        </div>
      </div>

      <div
        id="filter"
        className="w-full border border-gray-500 rounded-2xl p-2"
      >
        <div className="flex justify-between mb-3">
          <p className="text-xl">Filter</p>
          <button
            onClick={collapseFilter}
            className="bg-gray-200 rounded-full p-[3px]"
          >
            {filterO ? (
              <img src={Resources.upArrow} alt="icon" />
            ) : (
              <img src={Resources.downArrow} alt="icon" />
            )}
          </button>
        </div>

        <div className={`flex flex-wrap ${filterO ? "block" : "hidden"}`}>
          <div className="w-full my-4">
            <input
              type="checkbox"
              name="Living Room"
              id="checkbox1"
              checked={checkboxes["Living Room"]}
              onChange={(evt) => handleCheckboxes(evt)}
            />
            <label htmlFor="checkbox1" className="ml-2">
              Living Room
            </label>
          </div>

          <div className="w-full my-4">
            <input
              type="checkbox"
              name="Bedroom"
              id="checkbox2"
              checked={checkboxes.Bedroom}
              onChange={(evt) => handleCheckboxes(evt)}
            />
            <label htmlFor="checkbox2" className="ml-2">
              Bedroom
            </label>
          </div>

          <div className="w-full my-4">
            <input
              type="checkbox"
              name="Office"
              id="checkbox4"
              checked={checkboxes.Office}
              onChange={(evt) => handleCheckboxes(evt)}
            />
            <label htmlFor="checkbox4" className="ml-2">
              Office
            </label>
          </div>

          <div className="w-full my-4">
            <input
              type="checkbox"
              name="Outdoor"
              id="checkbox5"
              checked={checkboxes.Outdoor}
              onChange={(evt) => handleCheckboxes(evt)}
            />
            <label htmlFor="checkbox5" className="ml-2">
              Outdoors
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
