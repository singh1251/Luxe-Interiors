import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function OfficeSofa3() {
  const offSofa3 = Products.find((product) => product.id === 27);

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
    {
      label: "Rodez Saddle Leather Sofa",
      path: "/officeSofaCollection/officeSofa3",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.rodezOfficeSofa_C}
          img2={Resources.rodezOfficeSofa2}
          img3={Resources.rodezOfficeSofa3}
          img4={Resources.rodezOfficeSofa4}
          img5={Resources.rodezOfficeSofa5}
        />

        <ProductDescription name={offSofa3.name} price={offSofa3.price} />

        <Options
          product={offSofa3}
          productImg1={Resources.rodezOfficeSofa2}
          des1="Rust"
          productImg2={Resources.rodezOfficeSofaCamel}
          des2="Camel Twill"
          productImg3={Resources.rodezOfficeSofaBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
