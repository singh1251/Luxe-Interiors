import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Chair6() {
  const chair6 = Products.find((product) => product.id === 6);

  const links = [
    { label: "Home", path: "/" },
    { label: "Chair Collection", path: "/chairCollection" },
    { label: "Telluride Walnut Chair", path: "/chairCollection/chair6" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.tellurideChair_C_1}
          img2={Resources.tellurideChair2}
          img3={Resources.tellurideChair3}
          img4={Resources.tellurideChair4}
          img5={Resources.tellurideChair5}
        />

        <ProductDescription name={chair6.name} price={chair6.price} />

        <Options
          product={chair6}
          productImg1={Resources.tellurideChair3}
          des1="Walnut"
          productImg2={Resources.tellurideChairMaple}
          des2="Maple"
          productImg3={Resources.tellurideChairOak}
          des3="Oak"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
