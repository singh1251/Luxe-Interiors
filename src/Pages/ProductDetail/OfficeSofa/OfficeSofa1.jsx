import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function OfficeSofa1() {
  const offSofa1 = Products.find((product) => product.id === 25);

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
    { label: "Faible Sofa", path: "/officeSofaCollection/officeSofa1" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.faibleOfficeSofa_C}
          img2={Resources.faibleOfficeSofa2}
          img3={Resources.faibleOfficeSofa3}
          img4={Resources.faibleOfficeSofa4}
          img5={Resources.faibleOfficeSofa5}
        />

        <ProductDescription name={offSofa1.name} price={offSofa1.price} />

        <Options
          product={offSofa1}
          productImg1={Resources.faibleOfficeSofa2}
          des1="Right Arm-Chair"
          productImg2={Resources.faibleOfficeSofaL}
          des2="Left Arm-Chair"
          productImg3={Resources.faibleOfficeSofaU}
          des3="Right Arm Chair + Corner Chair"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
