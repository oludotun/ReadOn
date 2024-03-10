import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "@/components/Hero";
import ProductListTitle from "@/components/ProductListTitle";
import ProductList from "@/components/ProductList";

export default function Page({ products }) {
    const topDeals = products.filter((product) => product.topDeals == true);
    const featured = products.filter((product) => product.featured == true);
    const newRelease = products.sort((a, b) => a.id - b.id).slice(0, 4);

    return (
        <Layout>
            <Head>
                <title>ReadOn Bookstore | Home Page</title>
                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetuer adipiscing"
                ></meta>
            </Head>
            <div className="mt-14">
                <Hero />
                <ProductListTitle title="Today's Top Deals" />
                <ProductList products={topDeals} />
                <ProductListTitle title="Featured Books" />
                <ProductList products={featured} />
                <ProductListTitle title="New Release" />
                <ProductList products={newRelease} />
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const products = require("../data/products.json");

    return {
        props: { products: products.products },
        // Incremental Static Regeneration
        revalidate: 10, // In seconds
    };
}
