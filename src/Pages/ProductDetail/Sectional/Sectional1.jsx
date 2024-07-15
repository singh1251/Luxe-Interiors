import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Sectional1() {
  const sec1 = Products.find((product) => product.id === 19);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
    {
      label: "Mattea Linen Sectional",
      path: "/sectionalCollection/sectional1",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.matteaSectional_C}
          img2={Resources.matteaSectional2}
          img3={Resources.matteaSectional3}
          img4={Resources.matteaSectional4}
          img5={Resources.matteaSectional5}
        />

        <ProductDescription name={sec1.name} price={sec1.price} />

        <Options
          product={sec1}
          productImg1={Resources.matteaSectional2}
          des1="Midnight Black"
          productImg2={Resources.matteaSectionalGrey}
          des2="Stone Grey"
          productImg3={Resources.matteaSectionalWhite}
          des3="Pearl White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
