import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function SleeperSofa1() {
  const sSofa1 = Products.find((product) => product.id === 31);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
    {
      label: "Ceva Sleeper Sofa",
      path: "/sleeperSofaCollection/sleeperSofa1",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.cevaSleeperSofa_C}
          img2={Resources.cevaSleeperSofa2}
          img3={Resources.cevaSleeperSofa3}
          img4={Resources.cevaSleeperSofa4}
          img5={Resources.cevaSleeperSofa5}
        />

        <ProductDescription name={sSofa1.name} price={sSofa1.price} />

        <Options
          product={sSofa1}
          productImg1={Resources.cevaSleeperSofa2}
          des1="Ocean Blue"
          productImg2={Resources.cevaSleeperSofaGreen}
          des2="Jade Green"
          productImg3={Resources.cevaSleeperSofaWhite}
          des3="Fog White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
