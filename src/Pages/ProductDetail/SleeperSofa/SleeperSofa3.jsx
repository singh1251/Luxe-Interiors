import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function SleeperSofa3() {
  const sSofa3 = Products.find((product) => product.id === 33);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
    {
      label: "Algora Premiun Sleeper Sofa",
      path: "/sleeperSofaCollection/sleeperSofa3",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.algoraSleeperSofa_C}
          img2={Resources.algoraSleeperSofa2}
          img3={Resources.algoraSleeperSofa3}
          img4={Resources.algoraSleeperSofa4}
          img5={Resources.algoraSleeperSofa5}
        />

        <ProductDescription name={sSofa3.name} price={sSofa3.price} />

        <Options
          product={sSofa3}
          productImg1={Resources.algoraSleeperSofa2}
          des1="Pearl White"
          productImg2={Resources.algoraSleeperSofaBrown}
          des2="Rust Brown"
          productImg3={Resources.algoraSleeperSofaGrey}
          des3="Stone Grey"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
