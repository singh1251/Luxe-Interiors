import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Loveseat5() {
  const loveseat5 = Products.find((product) => product.id === 11);

  const links = [
    { label: "Home", path: "/" },
    { label: "Loveseat Collection", path: "/loveseatCollection" },
    { label: "Fitz Boucle Loveseat", path: "/loveseatCollection/loveseat1" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.fitzLoveseat_C}
          img2={Resources.fitzLoveseat2}
          img3={Resources.fitzLoveseat3}
          img4={Resources.fitzLoveseat4}
          img5={Resources.fitzLoveseat5}
        />

        <ProductDescription name={loveseat5.name} price={loveseat5.price} />

        <Options
          product={loveseat5}
          productImg1={Resources.fitzLoveseat2}
          des1="Pearl White"
          productImg2={Resources.fitzLoveseatGolden}
          des2="Golden Oak"
          productImg3={Resources.fitzLoveseatBrown}
          des3="Rust Brown"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
