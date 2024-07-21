import { Resources } from "../assets/Resources";

export default function Rating({ rating = "4.5", outOf = "545" }) {
  return (
    <div className="mt-[0.20rem] sm:mt-[0.13rem] flex">
      <img src={Resources.starIcon} alt="icon" className="mx-1" />{" "}
      <p className="text-sm sm:text-base">
        <span>{rating}</span> <span className=" text-gray-500">({outOf})</span>
      </p>
    </div>
  );
}
