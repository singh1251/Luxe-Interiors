import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Loveseat1() {
  const loveseat1 = Products.find((product) => product.id === 7);

  const links = [
    { label: "Home", path: "/" },
    { label: "Loveseat Collection", path: "/loveseatCollection" },
    { label: "Deseo Loveseat", path: "/loveseatCollection/loveseat1" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.deseoLoveseat_C}
          img2={Resources.deseoLoveseat2}
          img3={Resources.deseoLoveseat3}
          img4={Resources.deseoLoveseat4}
          img5={Resources.deseoLoveseat5}
        />

        <ProductDescription name={loveseat1.name} price={loveseat1.price} />

        <Options
          product={loveseat1}
          productImg1={Resources.deseoLoveseat5}
          des1="Golden Oak"
          productImg2={Resources.deseoLoveseatWhite}
          des2="Peal White"
          productImg3={Resources.deseoLoveseatBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
