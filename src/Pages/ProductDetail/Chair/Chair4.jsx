import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Chair4() {
  const chair4 = Products.find((product) => product.id === 4);

  const links = [
    { label: "Home", path: "/" },
    { label: "Chair Collection", path: "/chairCollection" },
    { label: "Outdoor Swivel Chair", path: "/chairCollection/chair4" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.swivelChair_C_1}
          img2={Resources.swivelChair2}
          img3={Resources.swivelChair3}
          img4={Resources.swivelChair4}
          img5={Resources.swivelChair5}
        />

        <ProductDescription name={chair4.name} price={chair4.price} />

        <Options
          product={chair4}
          productImg1={Resources.swivelChair5}
          des1="Maple"
          productImg2={Resources.swivelChairOak}
          des2="Oak"
          productImg3={Resources.swivelChairWalnut}
          des3="Walnut"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
