import { useState } from "react";
import { Products } from "../../assets/Resources";
import Breadcrumbs from "../../Components/Breadcrumbs";

import CollectionItem from "../../Components/CollectionItem";
import SortFilter from "../../Components/SortFilter";

export default function sleeperSofaCollection() {
  const Daybed = Products.filter(
    (product) => product.id >= 13 && product.id <= 18
  );

  const [categories, setCategories] = useState({});

  const handleCategories = (obj) => {
    setCategories(obj);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "Daybed Collection", path: "/daybedCollection" },
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
            {Daybed.map((dB) => {
              if (
                Object.keys(categories).every((c) => !categories[c]) ||
                categories[dB.category]
              )
                return <CollectionItem key={dB.id} product={dB} />;
            })}
          </section>
        </section>
      </section>
    </>
  );
}
