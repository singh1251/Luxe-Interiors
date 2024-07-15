import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Loveseat2() {
  const loveseat2 = Products.find((product) => product.id === 8);

  const links = [
    { label: "Home", path: "/" },
    { label: "Loveseat Collection", path: "/loveseatCollection" },
    { label: "Cabra Loveseat", path: "/loveseatCollection/loveseat2" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.cabraLoveseat_C}
          img2={Resources.cabraLoveseat2}
          img3={Resources.cabraLoveseat3}
          img4={Resources.cabraLoveseat4}
          img5={Resources.cabraLoveseat5}
        />

        <ProductDescription name={loveseat2.name} price={loveseat2.price} />

        <Options
          product={loveseat2}
          productImg1={Resources.cabraLoveseat2}
          des1="Two-Seater"
          productImg2={Resources.cabraLoveseat3S}
          des2="Three-Seater"
          productImg3={Resources.cabraLoveseatL}
          des3="L-Shaped"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
