import { useState } from "react";
import { Products } from "../../assets/Resources";
import Breadcrumbs from "../../Components/Breadcrumbs";

import CollectionItem from "../../Components/CollectionItem";
import SortFilter from "../../Components/SortFilter";

export default function sleeperSofaCollection() {
  const OfficeSofa = Products.filter(
    (product) => product.id >= 25 && product.id <= 30
  );

  const [categories, setCategories] = useState({});

  const handleCategories = (obj) => {
    setCategories(obj);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "Office Sofa Collection", path: "/officeSofaCollection" },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex justify-center my-14">
        <section className="w-[90%] flex flex-wrap tablet:justify-between  tablet:flex-nowrap">
          <SortFilter
            categories={categories}
            handleCategories={handleCategories}
          />

          <section className="w-full tablet:w-[75%] flex flex-wrap">
            {OfficeSofa.map((offSofa) => {
              if (
                Object.keys(categories).every((c) => !categories[c]) ||
                categories[offSofa.category]
              )
                return <CollectionItem key={offSofa.id} product={offSofa} />;
            })}
          </section>
        </section>
      </section>
    </>
  );
}
