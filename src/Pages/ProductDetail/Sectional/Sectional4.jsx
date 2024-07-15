import { Products, Resources } from "../../../assets/Resources";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import WhyChooseUs from "../../../Components/WhyChooseUs";
import ProductImages from "../../../Components/ProductImages";
import ProductDescription from "../../../Components/ProductDescription";
import Options from "../../../Components/Options";

export default function Sectional4() {
  const sec4 = Products.find((product) => product.id === 22);

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
    {
      label: "Faible Linen Sectional",
      path: "/sectionalCollection/sectional4",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center my-10">
        <ProductImages
          img1={Resources.faibleSectional_C}
          img2={Resources.faibleSectional2}
          img3={Resources.faibleSectional3}
          img4={Resources.faibleSectional4}
          img5={Resources.faibleSectional5}
        />

        <ProductDescription name={sec4.name} price={sec4.price} />

        <Options
          product={sec4}
          productImg1={Resources.faibleSectional2}
          des1="Camel Twill"
          productImg2={Resources.faibleSectionalBrown}
          des2="Powder Brown"
          productImg3={Resources.faibleSectionalWhite}
          des3="Pearl White"
        />

        <WhyChooseUs />
      </section>
    </>
  );
}
