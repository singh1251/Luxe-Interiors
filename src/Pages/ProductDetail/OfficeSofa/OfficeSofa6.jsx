import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function OfficeSofa6() {
  const offSofa6 = Products.find((product) => product.id === 30);

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
    {
      label: "Forte Channeled Sofa",
      path: "/officeSofaCollection/officeSofa6",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.forteOfficeSofa_C}
          img2={Resources.forteOfficeSofa2}
          img3={Resources.forteOfficeSofa3}
          img4={Resources.forteOfficeSofa4}
          img5={Resources.forteOfficeSofa5}
        />

        <ProductDescription name={offSofa6.name} price={offSofa6.price} />

        <Options
          product={offSofa6}
          productImg1={Resources.forteOfficeSofa2}
          des1="Bello Saddle"
          productImg2={Resources.forteOfficeSofaGrey}
          des2="Smoke Grey"
          productImg3={Resources.forteOfficeSofaBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
