import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function SleeperSofa2() {
  const sSofa2 = Products.find((product) => product.id === 32);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
    {
      label: "Una Sleeper Sofa",
      path: "/sleeperSofaCollection/sleeperSofa2",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.unaSleeperSofa_C}
          img2={Resources.unaSleeperSofa2}
          img3={Resources.unaSleeperSofa3}
          img4={Resources.unaSleeperSofa4}
          img5={Resources.unaSleeperSofa5}
        />

        <ProductDescription name={sSofa2.name} price={sSofa2.price} />

        <Options
          product={sSofa2}
          productImg1={Resources.unaSleeperSofa2}
          des1="Fog White"
          productImg2={Resources.unaSleeperSofaGrey}
          des2="Stone Grey"
          productImg3={Resources.unaSleeperSofaBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
