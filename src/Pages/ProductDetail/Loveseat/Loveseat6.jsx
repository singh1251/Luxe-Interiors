import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Loveseat6() {
  const loveseat6 = Products.find((product) => product.id === 11);

  const links = [
    { label: "Home", path: "/" },
    { label: "Loveseat Collection", path: "/loveseatCollection" },
    {
      label: "Channeled Green Loveseat",
      path: "/loveseatCollection/loveseat6",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.modernLoveseat_C}
          img2={Resources.modernLoveseat2}
          img3={Resources.modernLoveseat3}
          img4={Resources.modernLoveseat4}
          img5={Resources.modernLoveseat5}
        />

        <ProductDescription name={loveseat6.name} price={loveseat6.price} />

        <Options
          product={loveseat6}
          productImg1={Resources.modernLoveseat2}
          des1="Evergreen velvet"
          productImg2={Resources.modernLoveseatGrey}
          des2="Stone Grey"
          productImg3={Resources.modernLoveseatWhite}
          des3="Pearl White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
