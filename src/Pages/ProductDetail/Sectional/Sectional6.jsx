import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Sectional6() {
  const sec6 = Products.find((product) => product.id === 24);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
    {
      label: "Strato Leather Sectional",
      path: "/sectionalCollection/sectional6",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.deseoSectional_1_C}
          img2={Resources.deseoSectional_2}
          img3={Resources.deseoSectional_3}
          img4={Resources.deseoSectional_4}
          img5={Resources.deseoSectional_5}
        />

        <ProductDescription name={sec6.name} price={sec6.price} />

        <Options
          product={sec6}
          productImg1={Resources.deseoSectional_2}
          des1="Tan"
          productImg2={Resources.deseoSectional_White}
          des2="Fog White"
          productImg3={Resources.deseoSectional_Black}
          des3="Midnight Black"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
