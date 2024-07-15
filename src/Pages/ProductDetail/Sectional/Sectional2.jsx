import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Sectional2() {
  const sec2 = Products.find((product) => product.id === 20);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
    {
      label: "Deseo Modular Sectional",
      path: "/sectionalCollection/sectional2",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.deseoSectional_C}
          img2={Resources.deseoSectional2}
          img3={Resources.deseoSectional3}
          img4={Resources.deseoSectional4}
          img5={Resources.deseoSectional5}
        />

        <ProductDescription name={sec2.name} price={sec2.price} />

        <Options
          product={sec2}
          productImg1={Resources.deseoSectional2}
          des1="Pearl White"
          productImg2={Resources.deseoSectionalBlack}
          des2="Midnight Black"
          productImg3={Resources.deseoSectionalSaddle}
          des3="Bello Saddle"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
