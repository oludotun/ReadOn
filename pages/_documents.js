import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html className="h-full bg-white">
                <Head>
                    <meta
                        property="og:url"
                        content="http://up2271435.students.portsmouthuni.ac.uk/wp1"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en-US" />
                    <meta property="og:title" content="ReadOn Bookstore" />
                    <meta
                        property="og:description"
                        content="An online bookstore with wide varieties of collections"
                    />
                    <meta
                        name="keywords"
                        content="books, online bookstore, book store"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body className="h-full">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
