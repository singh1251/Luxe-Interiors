import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Daybed6() {
  const daybed6 = Products.find((product) => product.id === 18);

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
    { label: "Serafin Daybed", path: "/daybedCollection/daybed6" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.serafinDaybed_C}
          img2={Resources.serafinDaybed2}
          img3={Resources.serafinDaybed3}
          img4={Resources.serafinDaybed4}
          img5={Resources.serafinDaybed5}
        />

        <ProductDescription name={daybed6.name} price={daybed6.price} />

        <Options
          product={daybed6}
          productImg1={Resources.serafinDaybed2}
          des1="Snow White"
          productImg2={Resources.serafinDaybedTan}
          des2="Tan"
          productImg3={Resources.serafinDaybedBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
