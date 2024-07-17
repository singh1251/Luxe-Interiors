import { useState } from "react";
import { Products } from "../../assets/Resources";
import Breadcrumbs from "../../Components/Breadcrumbs";

import CollectionItem from "../../Components/CollectionItem";
import SortFilter from "../../Components/SortFilter";

export default function sleeperSofaCollection() {
  const SleeperSofa = Products.filter(
    (product) => product.id >= 31 && product.id <= 36
  );

  const [categories, setCategories] = useState({});

  const handleCategories = (obj) => {
    setCategories(obj);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "Sleeper Sofa Collection", path: "/sleeperSofaCollection" },
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

          <section className="w-full tablet:w-[75%] flex flex-wrap justify-between">
            {SleeperSofa.map((sSofa) => {
              if (
                Object.keys(categories).every((c) => !categories[c]) ||
                categories[sSofa.category]
              )
                return <CollectionItem key={sSofa.id} product={sSofa} />;
            })}
          </section>
        </section>
      </section>
    </>
  );
}

// (
//   <CollectionItem key={sSofa.id} product={sSofa} />
// )
