import { Resources } from "../assets/Resources";

export default function Header() {
  return (
    <section className="mb-20">
      <div>
        <img
          src={Resources.homeImg}
          alt="image"
          className="min-h-[400px] w-full"
        />
      </div>

      <div className="bg-[#fff8f0] py-10 flex flex-wrap tablet:flex-nowrap tablet:justify-center">
        <div className="relative mb-14 w-full tablet:w-1/5 tablet:mb-0">
          <img src={Resources.awardIcon} alt="icon" className="absolute" />
          <p className="ml-16 text-lg font-bold">High Quality</p>
          <p className="ml-16 text-[#7E7171]">Crafted from top materials</p>
        </div>

        <div className="relative mb-14 w-full tablet:w-1/5 tablet:mb-0">
          <img src={Resources.shieldIcon} alt="icon" className="absolute" />
          <p className="ml-16 text-lg font-bold">Warranty Protection</p>
          <p className="ml-16 text-[#7E7171]">Over 2 years</p>
        </div>

        <div className="relative mb-14 w-full tablet:w-1/5 tablet:mb-0">
          <img src={Resources.shippingIcon} alt="icon" className="absolute" />
          <p className="ml-16 text-lg font-bold">Free Shipping</p>
          <p className="ml-16 text-[#7E7171]">Order over $150</p>
        </div>

        <div className="relative w-full tablet:w-1/5 tablet:mb-0">
          <img src={Resources.supportIcon} alt="icon" className="absolute" />
          <p className="ml-16 text-lg font-bold">24 / 7 Support</p>
          <p className="ml-16 text-[#7E7171]">Dedicated support</p>
        </div>
      </div>
    </section>
  );
}
