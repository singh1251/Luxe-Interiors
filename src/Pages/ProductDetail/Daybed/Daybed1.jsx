import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Daybed1() {
  const daybed1 = Products.find((product) => product.id === 13);

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
    { label: "Lazar Daybed", path: "/daybedCollection/daybed1" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.lazarDaybed_C}
          img2={Resources.lazarDaybed2}
          img3={Resources.lazarDaybed3}
          img4={Resources.lazarDaybed4}
          img5={Resources.lazarDaybed5}
        />

        <ProductDescription name={daybed1.name} price={daybed1.price} />

        <Options
          product={daybed1}
          productImg1={Resources.lazarDaybed3}
          des1="Golden Oak"
          productImg2={Resources.lazarDaybedTan}
          des2="Tan"
          productImg3={Resources.lazarDaybedBlack}
          des3="Rust Brown"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
