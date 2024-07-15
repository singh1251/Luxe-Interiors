import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Chair5() {
  const chair5 = Products.find((product) => product.id === 5);

  const links = [
    { label: "Home", path: "/" },
    { label: "Chair Collection", path: "/chairCollection" },
    { label: "Carlo Chair", path: "/chairCollection/chair5" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.carloChair_C_1}
          img2={Resources.carloChair2}
          img3={Resources.carloChair3}
          img4={Resources.carloChair4}
          img5={Resources.carloChair5}
        />

        <ProductDescription name={chair5.name} price={chair5.price} />

        <Options
          product={chair5}
          productImg1={Resources.carloChair5}
          des1="Tarragon Green Velvet"
          productImg2={Resources.carloChairBlue}
          des2="Midnight Twill"
          productImg3={Resources.carloChairSilver}
          des3="Silver Twill"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
