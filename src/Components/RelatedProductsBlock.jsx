import { Products } from "../assets/Resources";
import ProductBlock from "./ProductBlock";

export default function RelatedProductsBlock() {
  return (
    <section className="flex flex-wrap justify-center">
      <p className="w-[90%] text-5xl font-bold text-center mb-2">
        Popular Products
      </p>
      <p className="w-[90%] text-center text-gray-500 mb-10">
        Things to keep an eye on
      </p>

      <section className="w-[90%] rounded-2xl flex flex-wrap sm:justify-between mb-20">
        {Products.map((product) => {
          if (product.id >= 37) {
            return (
              <div
                key={product.id}
                className="w-full sm:w-[45%] tablet:w-[23%] flex flex-wrap"
              >
                <ProductBlock relatedProduct={product} />
              </div>
            );
          }
        })}
      </section>
    </section>
  );
}
