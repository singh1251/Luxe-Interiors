import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Chair1() {
  const chair1 = Products.find((product) => product.id === 1);

  const links = [
    { label: "Home", path: "/" },
    { label: "Chair Collection", path: "/chairCollection" },
    { label: "Auburn Chair", path: "/chairCollection/chair1" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.auburnChair_C_1}
          img2={Resources.auburnChair2}
          img3={Resources.auburnChair3}
          img4={Resources.auburnChair4}
          img5={Resources.auburnChair5}
        />

        <ProductDescription name={chair1.name} price={chair1.price} />

        <Options
          product={chair1}
          productImg1={Resources.auburnChair3}
          des1="Golden Oak"
          productImg2={Resources.auburnChairBlue}
          des2="Midnight Twill"
          productImg3={Resources.auburnChairSilver}
          des3="Silver Twill"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
