import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function OfficeSofa4() {
  const offSofa4 = Products.find((product) => product.id === 28);

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
    { label: "Hada Armless Sofa", path: "/officeSofaCollection/officeSofa4" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.hadaOfficeSofa_C}
          img2={Resources.hadaOfficeSofa2}
          img3={Resources.hadaOfficeSofa3}
          img4={Resources.hadaOfficeSofa4}
          img5={Resources.hadaOfficeSofa5}
        />

        <ProductDescription name={offSofa4.name} price={offSofa4.price} />

        <Options
          product={offSofa4}
          productImg1={Resources.hadaOfficeSofa2}
          des1="Camel Twill"
          productImg2={Resources.hadaOfficeSofaBlack}
          des2="Midnight Black"
          productImg3={Resources.hadaOfficeSofaGrey}
          des3="Stone Grey"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
