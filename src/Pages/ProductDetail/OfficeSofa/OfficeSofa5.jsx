import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function OfficeSofa5() {
  const offSofa5 = Products.find((product) => product.id === 29);

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
    {
      label: "Hoxton Black Leather Sofa",
      path: "/officeSofaCollection/officeSofa5",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.hoxtonOfficeSofa_C}
          img2={Resources.hoxtonOfficeSofa2}
          img3={Resources.hoxtonOfficeSofa3}
          img4={Resources.hoxtonOfficeSofa4}
          img5={Resources.hoxtonOfficeSofa5}
        />

        <ProductDescription name={offSofa5.name} price={offSofa5.price} />

        <Options
          product={offSofa5}
          productImg1={Resources.hoxtonOfficeSofa2}
          des1="Midnight Black"
          productImg2={Resources.hoxtonOfficeSofaGrey}
          des2="Stone Grey"
          productImg3={Resources.hoxtonOfficeSofaSaddle}
          des3="Bello Saddle"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
