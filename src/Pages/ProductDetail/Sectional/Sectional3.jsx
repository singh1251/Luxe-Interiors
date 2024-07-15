import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Sectional3() {
  const sec3 = Products.find((product) => product.id === 21);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
    {
      label: "Malea Modular Sectional",
      path: "/sectionalCollection/sectional3",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.maleaSectional_C}
          img2={Resources.maleaSectional2}
          img3={Resources.maleaSectional3}
          img4={Resources.maleaSectional4}
          img5={Resources.maleaSectional5}
        />

        <ProductDescription name={sec3.name} price={sec3.price} />

        <Options
          product={sec3}
          productImg1={Resources.maleaSectional2}
          des1="Pearl White"
          productImg2={Resources.maleaSectionalBrown}
          des2="Powder Brown"
          productImg3={Resources.maleaSectionalWhite}
          des3="Bello White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
