import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Chair3() {
  const chair3 = Products.find((product) => product.id === 3);

  const links = [
    { label: "Home", path: "/" },
    { label: "Chair Collection", path: "/chairCollection" },
    { label: "Zander Leather Chair", path: "/chairCollection/chair3" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.zanderChair_C_1}
          img2={Resources.zanderChair2}
          img3={Resources.zanderChair3}
          img4={Resources.zanderChair4}
          img5={Resources.zanderChair5}
        />

        <ProductDescription name={chair3.name} price={chair3.price} />

        <Options
          product={chair3}
          productImg1={Resources.zanderChair3}
          des1="Tan"
          productImg2={Resources.zanderChairBrown}
          des2="Haze Brown"
          productImg3={Resources.zanderChairBlack}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
