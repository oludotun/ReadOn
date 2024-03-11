import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import ProductListTitle from "@/components/ProductListTitle";
import ProductList from "@/components/ProductList";

export default function AuthorBooks({ products, author }) {
    const title = `ReadOn Bookstore | ${author.name}'s Books`;
    return (
        <Layout>
            <Head>
                {/* Page metadata (title and description) */}
                <title>{title}</title>
                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetuer adipiscing"
                ></meta>
            </Head>
            {/* Author's page displaying list of books by the author */}
            <div className="mt-16">
                <ProductListTitle title={author.name + "'s Books"} />
                <ProductList products={products} />
            </div>
        </Layout>
    );
}

// NextJs function for generating static pages
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

// NextJs function for fetching data required to generate pages
export async function getStaticProps({ params }) {
    const slug = params.slug;
    const productData = require("../../data/products.json");
    const authors = require("../../data/authors.json");

    const products = productData.products.slice(0, 12);
    const author = authors.authors.find((auth) => auth.slug === slug);
    return {
        props: { products, slug, author },
        // Incremental Static Regeneration
        // revalidate: 10, // In seconds
    };
}
