import React, { useState } from "react";
import Layout from "@/components/Layout";
import ProductListTitle from "@/components/ProductListTitle";
import ProductList from "@/components/ProductList";

export default function AuthorBooks({ products, slug, author }) {
    return (
        <Layout>
            <div className="mt-16">
                <ProductListTitle title={author.name + "'s Books"} />
                <ProductList products={products} />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const authors = require("../../data/authors.json");
    const paths = authors.authors.map((author) => ({
        params: { slug: author.slug },
    }));
    return {
        paths,
        fallback: false, // false or 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const productData = require("../../data/products.json");
    const authors = require("../../data/authors.json");

    const products = productData.products.slice(0, 12);
    const author = authors.authors.find((auth) => auth.slug === slug);
    return {
        props: { products, slug, author },
        // Incremental Static Regeneration
        revalidate: 10, // In seconds
    };
}
