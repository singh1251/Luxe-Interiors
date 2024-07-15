import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Daybed5() {
  const daybed5 = Products.find((product) => product.id === 17);

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
    { label: "Schaefer Daybed", path: "/daybedCollection/daybed5" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.modernDaybed_C}
          img2={Resources.modernDaybed2}
          img3={Resources.modernDaybed3}
          img4={Resources.modernDaybed4}
          img5={Resources.modernDaybed5}
        />

        <ProductDescription name={daybed5.name} price={daybed5.price} />

        <Options
          product={daybed5}
          productImg1={Resources.modernDaybed2}
          des1="Smoke Grey"
          productImg2={Resources.modernDaybedBlue}
          des2="Sea Blue"
          productImg3={Resources.modernDaybedCamel}
          des3="Camel Twill"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
