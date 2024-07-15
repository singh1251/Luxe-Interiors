import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Daybed3() {
  const daybed3 = Products.find((product) => product.id === 15);

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
    { label: "Fluted Daybed", path: "/daybedCollection/daybed3" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.flutedDaybed_C}
          img2={Resources.flutedDaybed2}
          img3={Resources.flutedDaybed3}
          img4={Resources.flutedDaybed4}
          img5={Resources.flutedDaybed5}
        />

        <ProductDescription name={daybed3.name} price={daybed3.price} />

        <Options
          product={daybed3}
          productImg1={Resources.flutedDaybed3}
          des1="Smoke White"
          productImg2={Resources.flutedDaybedSilver}
          des2="Silver"
          productImg3={Resources.flutedDaybedOffWhite}
          des3="Off-White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
