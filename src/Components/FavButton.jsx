import { useState } from "react";
import { Resources } from "../assets/Resources";

export default function FavButton() {
  const [isFavClicked, setIsFavClicked] = useState(false);

  const handleClick = () => {
    setIsFavClicked((curr) => !curr);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full border border-gray-500 p-2 rounded-full"
    >
      <img
        src={isFavClicked ? Resources.heartFilledIcon : Resources.heartIcon}
        alt="icon"
        className="w-full"
      />
    </button>
  );
}
