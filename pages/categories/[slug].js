import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import ProductListTitle from "@/components/ProductListTitle";
import ProductList from "@/components/ProductList";

export default function CategoryList({ products, slug, subcategories }) {
    const subcategory = subcategories.find((item) => item.slug === slug);
    const title = `ReadOn Bookstore | ${subcategory.subcategory} Category`;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetuer adipiscing"
                ></meta>
            </Head>
            <div className="mt-16">
                <ProductListTitle title={subcategory.subcategory} />
                <ProductList products={products} />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const navData = require("../../data/navigation.json");

    let paths = [];

    navData.categories.forEach((category) =>
        category.sections.forEach((section) =>
            section.items.forEach(
                (subcategory) =>
                    (paths = [...paths, { params: { slug: subcategory.slug } }])
            )
        )
    );
    return {
        paths,
        fallback: false, // false or 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const productData = require("../../data/products.json");
    const navData = require("../../data/navigation.json");

    let subcategories = [];
    navData.categories.forEach((category) =>
        category.sections.forEach((section) => {
            const category = section.name;
            section.items.forEach(
                (subcategory) =>
                    (subcategories = [
                        ...subcategories,
                        {
                            category,
                            subcategory: subcategory.name,
                            slug: subcategory.slug,
                        },
                    ])
            );
        })
    );

    // This should be replace with a query that returns books in that category
    const products = productData.products.slice(0, 12);
    return {
        props: { products, slug, subcategories },
        // Incremental Static Regeneration
        revalidate: 10, // In seconds
    };
}
