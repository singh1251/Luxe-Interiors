import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function SleeperSofa6() {
  const sSofa6 = Products.find((product) => product.id === 36);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
    {
      label: "Sentosa Sleeper Sofa",
      path: "/sleeperSofaCollection/sleeperSofa6",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.sentosaSleeperSofa_C}
          img2={Resources.sentosaSleeperSofa2}
          img3={Resources.sentosaSleeperSofa3}
          img4={Resources.sentosaSleeperSofa4}
          img5={Resources.sentosaSleeperSofa5}
        />

        <ProductDescription name={sSofa6.name} price={sSofa6.price} />

        <Options
          product={sSofa6}
          productImg1={Resources.sentosaSleeperSofa2}
          des1="Frost Grey"
          productImg2={Resources.sentosaSleeperSofaBrown}
          des2="Rust Brown"
          productImg3={Resources.sentosaSleeperSofaGreen}
          des3="Jade Green"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
