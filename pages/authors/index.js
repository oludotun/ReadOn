import * as React from "react";

import Layout from "../../components/Layout";
import PeopleList from "../../components/PeopleList";
import authorsData from "../../data/authors";

export default function Authors() {
    const authors = authorsData.authors;
    return (
        <Layout>
            <div className="mt-14">
                <PeopleList people={authors} />
            </div>
        </Layout>
    );
}
