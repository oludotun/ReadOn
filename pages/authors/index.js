import * as React from "react";
import Head from "next/head";

import Layout from "../../components/Layout";
import PeopleList from "../../components/PeopleList";
import authorsData from "../../data/authors";

export default function Authors() {
    const authors = authorsData.authors;
    return (
        <Layout>
            <Head>
                <title>ReadOn Bookstore | Authors Page</title>
            </Head>
            <div className="mt-14">
                <PeopleList people={authors} />
            </div>
        </Layout>
    );
}
