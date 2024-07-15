import { Resources } from "../assets/Resources";

export default function Rating({ rating = "4.5", outOf = "545" }) {
  return (
    <div className="flex">
      <img src={Resources.starIcon} alt="icon" className="mx-1" />{" "}
      <p>
        <span>{rating}</span> <span className=" text-gray-500">({outOf})</span>
      </p>
    </div>
  );
}
