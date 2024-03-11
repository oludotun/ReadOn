import * as React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import PeopleList from "../components/PeopleList";
import authorsData from "../data/authors";
import ProductListTitle from "@/components/ProductListTitle";

export default function Authors() {
    const authors = authorsData.authors;
    return (
        <Layout>
            <Head>
                {/* Page metadata (title and description) */}
                <title>ReadOn Bookstore | Authors Page</title>
                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetuer adipiscing"
                ></meta>
            </Head>
            {/* Page with list of authors */}
            <div className="mt-16">
                <div className="py-4">
                    <ProductListTitle title={"Our Authors"} />
                </div>
                <PeopleList people={authors} />
            </div>
        </Layout>
    );
}
