import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import ProductList from "../data/products.json";

export default function Cart() {
    // const [open, setOpen] = useState(true);
    const products = ProductList.products.slice(0, 4);
    const subTotal = products.reduce((a, product) => {
        return a + Number(product.price.slice(1));
    }, 0);
    return (
        <Layout>
            <Head>
                <title>Cart</title>
            </Head>
            <div className="mt-14 flex flex-col bg-white">
                <div className="flex-1 px-4 py-6 sm:px-6">
                    <div className="border-b py-2">
                        <h1 className="text-2xl font-semibold">
                            Shopping Cart
                        </h1>
                    </div>

                    <div className="mt-8">
                        <div className="flow-root">
                            <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                            >
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href={product.href}>
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                    <p className="ml-4">
                                                        {product.price}
                                                    </p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Author: Teddy Joseph
                                                </p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">
                                                    Qty 2
                                                </p>

                                                <div className="flex">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6 md:mx-40 lg:mx-80">
                        <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600"
                        >
                            Checkout
                        </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or{" "}
                            <Link
                                href="/"
                                className="font-medium text-primary hover:text-orange-600"
                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
