import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Chair2() {
  const chair2 = Products.find((product) => product.id === 2);

  const links = [
    { label: "Home", path: "/" },
    { label: "Chair Collection", path: "/chairCollection" },
    { label: "Cozy Swivel Chair", path: "/chairCollection/chair2" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.cozyChair_C_1}
          img2={Resources.cozyChair2}
          img3={Resources.cozyChair3}
          img4={Resources.cozyChair4}
          img5={Resources.cozyChair5}
        />

        <ProductDescription name={chair2.name} price={chair2.price} />

        <Options
          product={chair2}
          productImg1={Resources.cozyChair3}
          des1="Frost Grey"
          productImg2={Resources.cozyChairBlue}
          des2="Midnight Twill"
          productImg3={Resources.cozyChairSilver}
          des3="Silver Twill"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
