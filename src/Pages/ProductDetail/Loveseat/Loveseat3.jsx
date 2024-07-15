import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Loveseat3() {
  const loveseat3 = Products.find((product) => product.id === 9);

  const links = [
    { label: "Home", path: "/" },
    { label: "Loveseat Collection", path: "/loveseatCollection" },
    { label: "Laszlo Beige Loveseat", path: "/loveseatCollection/loveseat3" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.laszloLoveseat_C}
          img2={Resources.laszloLoveseat2}
          img3={Resources.laszloLoveseat3}
          img4={Resources.laszloLoveseat4}
          img5={Resources.laszloLoveseat5}
        />

        <ProductDescription name={loveseat3.name} price={loveseat3.price} />

        <Options
          product={loveseat3}
          productImg1={Resources.laszloLoveseat2}
          des1="Camel Twill"
          productImg2={Resources.laszloLoveseatWhite}
          des2="Pearl White"
          productImg3={Resources.laszloLoveseatBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
