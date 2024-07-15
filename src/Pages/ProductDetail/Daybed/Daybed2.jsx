import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Daybed2() {
  const daybed2 = Products.find((product) => product.id === 14);

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
    { label: "Urban Daybed & Trundle", path: "/daybedCollection/daybed2" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.urbanDaybed_C}
          img2={Resources.urbanDaybed2}
          img3={Resources.urbanDaybed3}
          img4={Resources.urbanDaybed4}
          img5={Resources.urbanDaybed5}
        />

        <ProductDescription name={daybed2.name} price={daybed2.price} />

        <Options
          product={daybed2}
          productImg1={Resources.urbanDaybed3}
          des1="Frost Grey"
          productImg2={Resources.urbanDaybedBlue}
          des2="Midnight Twill"
          productImg3={Resources.urbanDaybedPink}
          des3="Fuchsia Pink"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
