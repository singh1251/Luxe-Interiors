import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Sectional5() {
  const sec5 = Products.find((product) => product.id === 23);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
    {
      label: "Hoxton Velvel Sectional",
      path: "/sectionalCollection/sectional5",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.modernSectional_C}
          img2={Resources.modernSectional2}
          img3={Resources.modernSectional3}
          img4={Resources.modernSectional4}
          img5={Resources.modernSectional5}
        />

        <ProductDescription name={sec5.name} price={sec5.price} />

        <Options
          product={sec5}
          productImg1={Resources.modernSectional2}
          des1="Jade velvet"
          productImg2={Resources.modernSectionalCamel}
          des2="Camel Twill"
          productImg3={Resources.modernSectionalWhite}
          des3="Pearl White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
