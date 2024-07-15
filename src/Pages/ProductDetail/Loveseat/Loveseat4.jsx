import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Loveseat4() {
  const loveseat4 = Products.find((product) => product.id === 10);

  const links = [
    { label: "Home", path: "/" },
    { label: "Loveseat Collection", path: "/loveseatCollection" },
    { label: "Gwyneth Black Loveseat", path: "/loveseatCollection/loveseat4" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.gwynethLoveseat_C}
          img2={Resources.gwynethLoveseat2}
          img3={Resources.gwynethLoveseat3}
          img4={Resources.gwynethLoveseat4}
          img5={Resources.gwynethLoveseat5}
        />

        <ProductDescription name={loveseat4.name} price={loveseat4.price} />

        <Options
          product={loveseat4}
          productImg1={Resources.gwynethLoveseat2}
          des1="Midnight Black"
          productImg2={Resources.gwynethLoveseatPink}
          des2="Fuchsia Pink"
          productImg3={Resources.gwynethLoveseatBlue}
          des3="Ocean Blue"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
