import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Daybed4() {
  const daybed4 = Products.find((product) => product.id === 16);

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
    { label: "Harmony Premium Daybed", path: "/daybedCollection/daybed4" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.harmonyDaybed_C}
          img2={Resources.harmonyDaybed2}
          img3={Resources.harmonyDaybed3}
          img4={Resources.harmonyDaybed4}
          img5={Resources.harmonyDaybed5}
        />

        <ProductDescription name={daybed4.name} price={daybed4.price} />

        <Options
          product={daybed4}
          productImg1={Resources.harmonyDaybed3}
          des1="Ocean Blue"
          productImg2={Resources.harmonyDaybedBurnt}
          des2="Burnt Umber"
          productImg3={Resources.harmonyDaybedCamel}
          des3="Camel Twill"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
