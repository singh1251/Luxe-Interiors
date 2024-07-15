import FavButton from "./FavButton";
import Rating from "./Rating";

export default function ProductDescription({ name, price }) {
  return (
    <section className="w-[90%] mb-14 tablet:w-[45%]">
      <div className="flex justify-between mb-8">
        <div className="w-[70%]">
          <h2 className="text-5xl">{name}</h2>

          <p className="text-gray-500 mb-4">
            A go-anywhere, durable velvet with a soft, short pile and matte
            finish
          </p>

          <Rating />

          <p className="text-lg font-semibold ml-1 mt-5">{`$${price}`}</p>
        </div>

        <div className="w-[50px] h-[50px] flex justify-end items-start">
          <FavButton />
        </div>
      </div>

      <div className="w-full mb-10">
        <div>
          <h2 className="text-xl font-bold mb-5">Product Details</h2>
        </div>
        <ul className="text-gray-500 text-base">
          <li className="my-4">
            Solid pine and engineered hardwood frame with reinforced joinery.
          </li>
          <li className="my-4">
            All wood is kiln dried to prevent warping. Solid rubberwood legs
            removable.
          </li>
          <li className="my-4">
            Webbed seat and back support. Seat cushions have fiber-wrapped,
            high-resiliency polyurethane foam cores.
          </li>
          <li className="my-4">
            On a scale from 1 to 5 5 being firmest, it's a 3.
          </li>
          <li className="my-4">
            This contract-grade item is manufactured to meet the demands of
            commercial use in addition to residential.
          </li>
          <li className="my-4">Back cushions are fiber filled.</li>
          <li>
            Designed to complement a variety of interior styles, from modern to
            traditional, ensuring seamless integration into any space.
          </li>
        </ul>
      </div>
    </section>
  );
}
