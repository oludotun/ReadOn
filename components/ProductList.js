import * as React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        // List displaying multiple product cards
        <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
