import Head from "next/head";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Layout from "@/components/Layout";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
    const images = [
        { id: 1, src: product.imageSrc },
        { id: 2, src: "/wp1/images/unfear.jpg" },
        { id: 3, src: "/wp1/images/the-role-of-nutrition.png" },
        { id: 4, src: "/wp1/images/the-long-firm.jpg" },
    ];
    const [activeImage, setActiveImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);
    const title = `ReadOn Bookstore | ${product.name}`;

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
            {/* Product page showing book detailed information */}
            <div className="mt-16">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                    <div>
                        {/* Selected product image */}
                        <img
                            src={activeImage.src}
                            alt={product.imageAlt}
                            className="w-full h-[32rem] aspect-square object-cover rounded-xl"
                        />
                        {/* List of all images for the product */}
                        <div className="flex flex-row justify-between h-24 py-4 mb-6">
                            {images.map((image) => (
                                <img
                                    key={image.id}
                                    onClick={() => setActiveImage(image)}
                                    src={image.src}
                                    alt={product.imageAlt}
                                    className="w-24 h-24 rounded-md cursor-pointer"
                                    role="presentation"
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        {/* Product Title */}
                        <div>
                            <span className="text-primary font-semibold">
                                Best Seller
                            </span>
                            <h1 className="text-4xl font-bold">
                                {product.name}
                            </h1>
                        </div>
                        {/* Product summary */}
                        <div className="pt-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo.
                            </p>
                        </div>
                        {/* Product Price */}
                        <h6 className="text-4xl font-semibold my-6">
                            {product.price}
                        </h6>
                        {/* Product Review */}
                        <div className="my-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                product.reviews.average > rating
                                                    ? "text-primary"
                                                    : "text-gray-200",
                                                "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">
                                    {product.reviews.average} out of 5 stars
                                </p>
                                <a
                                    href={product.reviews.href}
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {product.reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>
                        {/* Product quantity selection */}
                        <div className="flex flex-row items-center gap-6 my-6">
                            <div className="text-lg font-bold">Quantity:</div>
                            <div className="">
                                <button
                                    className="bg-gray-200 py-2 px-5 rounded-lg text-gray-800 text-3xl"
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            prev <= 1 ? 1 : prev - 1
                                        )
                                    }
                                >
                                    -
                                </button>
                                <span className="py-4 px-6 text-2xl">
                                    {quantity}
                                </span>
                                <button
                                    className="bg-gray-200 py-2 px-4 rounded-lg text-gray-800 text-3xl"
                                    onClick={() =>
                                        setQuantity((prev) => prev + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        {/* Product Call to Actions (Buy Now or Add to Cart) */}
                        <div className="flex flex-row items-center gap-12 py-4">
                            <div>
                                <button className="bg-primary hover:bg-orange-600 rounded-md text-white font-semibold py-2 px-8">
                                    Buy Now
                                </button>
                            </div>
                            <div className="">
                                <button className="flex items-center bg-cyan-600 hover:bg-cyan-500 rounded-md text-gray-100 font-semibold py-2 px-8">
                                    <ShoppingCartIcon className="h-6 w-6 mr-2" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Detailed description */}
                <div className="py-6">
                    <h2 className="text-2xl font-semibold py-2">Description</h2>
                    <p className="text-gray-800">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque
                        rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                        augue. Curabitur ullamcorper ultricies nisi. Nam eget
                        dui. Etiam rhoncus. Maecenas tempus, tellus eget
                        condimentum rhoncus, sem quam semper libero, sit amet
                        adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                        vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
                        odio et ante tincidunt tempus. Donec vitae sapien ut
                        libero venenatis faucibus. Nullam quis ante. Etiam sit
                        amet orci eget eros faucibus tincidunt. Duis leo. Sed
                        fringilla mauris sit amet nibh. Donec sodales sagittis
                        magna. Sed consequat, leo eget bibendum sodales, augue
                        velit cursus nunc.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

// NextJs function for generating static pages
export async function getStaticPaths() {
    const products = require("../../data/products.json");
    const paths = products.products.map((product) => ({
        params: { slug: product.slug },
    }));
    return {
        paths,
        fallback: false, // false or 'blocking'
    };
}

// NextJs function for fetching data required to generate pages
export async function getStaticProps({ params }) {
    const slug = params.slug;
    const products = require("../../data/products.json");

    const product = products.products.find((prod) => prod.slug === slug);
    return {
        props: { product: product },
        // Incremental Static Regeneration
        // revalidate: 10, // In seconds
    };
}
