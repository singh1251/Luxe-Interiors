import { Resources } from "../assets/Resources";

export default function Business() {
  return (
    <section className="my-20 flex flex-wrap">
      <div className="w-full tablet:w-[55%]">
        <img
          src={Resources.business}
          alt="image"
          className="w-full h-[500px] tablet:h-[600px]"
        />
      </div>

      <div className="w-full tablet:w-[45%] h-[500px] tablet:h-[600px] bg-[#fff8f0] flex flex-wrap justify-center items-center">
        <div className="w-[65%]">
          <p className="font-semibold text-[#7E7171]">LuxeInteriors</p>
          <p className="text-3xl font-bold">business to business</p>
        </div>

        <div className="w-[65%]">
          <p className="text-xl font-semibold mb-2">
            Floor-to-celing solutions
          </p>
          <p className="text-[#7E7171] mb-8">
            Contract-grade products and design support, plus members-only perks,
            for projects large or small.
          </p>
          <button className="font-bold text-sm border border-black pl-2 pr-6 py-3 hover:bg-[#774000] hover:text-[#ffecd5] hover:border-[#774000]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
