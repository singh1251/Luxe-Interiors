import { useState } from "react";
import { Products } from "../../assets/Resources";
import Breadcrumbs from "../../Components/Breadcrumbs";

import CollectionItem from "../../Components/CollectionItem";
import SortFilter from "../../Components/SortFilter";

export default function sleeperSofaCollection() {
  const Sectional = Products.filter(
    (product) => product.id >= 19 && product.id <= 24
  );

  const [categories, setCategories] = useState({});

  const handleCategories = (obj) => {
    setCategories(obj);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "Sectional Collection", path: "/sectionalCollection" },
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
            {Sectional.map((sec) => {
              if (
                Object.keys(categories).every((c) => !categories[c]) ||
                categories[sec.category]
              )
                return <CollectionItem key={sec.id} product={sec} />;
            })}
          </section>
        </section>
      </section>
    </>
  );
}
