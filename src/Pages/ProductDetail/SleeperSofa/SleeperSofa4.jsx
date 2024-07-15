import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function SleeperSofa4() {
  const sSofa4 = Products.find((product) => product.id === 34);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
    {
      label: "Claremont Sleeper Sofa",
      path: "/sleeperSofaCollection/sleeperSofa4",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.claremontSleeperSofa_C}
          img2={Resources.claremontSleeperSofa2}
          img3={Resources.claremontSleeperSofa3}
          img4={Resources.claremontSleeperSofa4}
          img5={Resources.claremontSleeperSofa5}
        />

        <ProductDescription name={sSofa4.name} price={sSofa4.price} />

        <Options
          product={sSofa4}
          productImg1={Resources.claremontSleeperSofa2}
          des1="Charcoal Black"
          productImg2={Resources.claremontSleeperSofaWhite}
          des2="Fog White"
          productImg3={Resources.claremontSleeperSofaGrey}
          des3="Stone Grey"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
