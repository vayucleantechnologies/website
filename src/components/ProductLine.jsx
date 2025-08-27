// import { Link } from "react-router-dom";
// import { products } from "../utils/products";
// import { Card1 } from "../utils/utils";
// import PrimaryButton from "./PrimaryButton";
// import ProductCard from "./ProductCard";
// import Section from "./Section";
// import SectionTitle from "./SectionTitle";

// const ProductLine = () => {
//   return (
//     <Section className="text-center">
//       <SectionTitle className="mb-10 text-center">
//         Browse by Category
//       </SectionTitle>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 md:mb-12">
//         {products.slice(0, 3).map((product) => (
          // <Link
          //   key={product.id}
          //   to={`/category/${product.category}/${product.slug}`}
          // >
          //   <ProductCard key={product.id} product={product} />
          // </Link>
//         ))}
//       </div>
//       <PrimaryButton to="/categories">View More</PrimaryButton>
//     </Section>
//   );
// };

// export default ProductLine;


import { Link } from "react-router-dom";
import { categories } from "../utils/products"; // ✅ use categories, not products
import PrimaryButton from "./PrimaryButton";
import ProductCard from "./ProductCard";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const ProductLine = () => {
  return (
    <Section className="text-center">
      <SectionTitle className="mb-10 text-center">
        Browse by Category
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 md:mb-12">
        {/* {categories.slice(0, 3).map((category) => ( */}
          {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.slug}`}>
            <ProductCard product={category} /> 
            {/* 👆 this assumes ProductCard can display a category */}
          </Link>
        ))}
      </div>

      <PrimaryButton to="/categories">View More</PrimaryButton>
    </Section>
  );
};

export default ProductLine;
