import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function cevaSleeperSofa5() {
  const sSofa5 = Products.find((product) => product.id === 35);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
    {
      label: "Algora Classic Sleeper Sofa",
      path: "/sleeperSofaCollection/sleeperSofa5",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.algoraSleeperSofa_1_C}
          img2={Resources.algoraSleeperSofa_2}
          img3={Resources.algoraSleeperSofa_3}
          img4={Resources.algoraSleeperSofa_4}
          img5={Resources.algoraSleeperSofa_5}
        />

        <ProductDescription name={sSofa5.name} price={sSofa5.price} />

        <Options
          product={sSofa5}
          productImg1={Resources.algoraSleeperSofa_2}
          des1="Midnight Black"
          productImg2={Resources.algoraSleeperSofa_Green}
          des2="Jade Green"
          productImg3={Resources.algoraSleeperSofa_Blue}
          des3="Ocean Blue"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
