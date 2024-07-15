import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function OfficeSofa2() {
  const offSofa2 = Products.find((product) => product.id === 26);

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
    { label: "Savile Tufted Sofa", path: "/officeSofaCollection/officeSofa2" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.savileOfficeSofa_C}
          img2={Resources.savileOfficeSofa2}
          img3={Resources.savileOfficeSofa3}
          img4={Resources.savileOfficeSofa4}
          img5={Resources.savileOfficeSofa5}
        />

        <ProductDescription name={offSofa2.name} price={offSofa2.price} />

        <Options
          product={offSofa2}
          productImg1={Resources.savileOfficeSofa2}
          des1="Vintage Tan"
          productImg2={Resources.savileOfficeSofaGrey}
          des2="Stone Grey"
          productImg3={Resources.savileOfficeSofaBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
