import * as React from "react";
import Link from "next/link";
import Header from "./Header";

const Layout = ({ children }) => {
    const data = {
        site: {
            siteMetadata: {
                title: `ReadOn Bookstore`,
                description: `An online bookstore with wide varieties of collections`,
                author: `Oludotun Ebiekuraju`,
                siteUrl: `http://up2271435.students.portsmouthuni.ac.uk/wp1`,
            },
        },
    };

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
                <main>
                    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                        {children}
                    </div>
                </main>
                <div className="bg-cyan-700">
                    <div className="antialiased text-white font-sans max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="container mx-auto">
                            <div className="">
                                <div className="py-12">
                                    <div className="lg:grid lg:grid-cols-10 lg:gap-12">
                                        <div className="py-0 lg:col-span-4 mb-4 lg:mb-0">
                                            <h2 className="font-bold text-xl mb-4">
                                                About
                                            </h2>
                                            <p className="text-sm">
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum.
                                            </p>
                                            <p className="text-sm pt-2">
                                                reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat
                                                nulla pariatur.
                                            </p>
                                            <p className="text-sm pt-2">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in
                                            </p>
                                        </div>
                                        <div className="py-0 lg:col-span-3 mb-4 lg:mb-0">
                                            <h2 className="font-bold text-xl mb-4">
                                                Quick Links
                                            </h2>
                                            <p className="pb-1">
                                                <Link href="/">Home</Link>
                                            </p>
                                            <p className="pb-1">
                                                <Link href="/about">
                                                    About Us
                                                </Link>
                                            </p>
                                            <p className="pb-1">
                                                <Link href="/help">
                                                    Help & Support
                                                </Link>
                                            </p>
                                            <p className="pb-1">
                                                <Link href="/contact">
                                                    Contact Us
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="py-0 lg:col-span-3 mb-4 lg:mb-0">
                                            <h2 className="font-bold text-xl mb-4">
                                                Contact
                                            </h2>
                                            <p className="pb-1">
                                                <svg
                                                    className="h-6 w-6 inline"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    stroke="none"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11c0-.81-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9c-.81 0-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12c0 .81.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08c.3.31.65.47 1.04.47c.42 0 .77-.16 1.07-.47c.3-.31.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4c-2.19 0-4.07.77-5.65 2.35S4 9.81 4 12c0 2.19.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z" />
                                                </svg>
                                                <span className="pl-2">
                                                    info@example.com
                                                </span>
                                            </p>
                                            <p className="pb-1">
                                                <a
                                                    target="_blank"
                                                    href={`https://api.whatsapp.com/send?phone=+2348012348678&text=Hello, @${data.site.siteMetadata?.title} team.`}
                                                    rel="noreferrer"
                                                >
                                                    <svg
                                                        className="h-6 w-6 inline"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        stroke="none"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M21.99 6.547a10.59 10.59 0 0 0-.103-1.282a4.312 4.312 0 0 0-.363-1.09A3.853 3.853 0 0 0 19.83 2.48a4.299 4.299 0 0 0-1.083-.362a10.523 10.523 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a10.565 10.565 0 0 0-1.282.103a4.312 4.312 0 0 0-1.09.363A3.854 3.854 0 0 0 2.48 4.17a4.303 4.303 0 0 0-.362 1.083a10.545 10.545 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a10.565 10.565 0 0 0 .103 1.282a4.313 4.313 0 0 0 .363 1.09A3.854 3.854 0 0 0 4.17 21.52a4.305 4.305 0 0 0 1.083.362a10.52 10.52 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a10.578 10.578 0 0 0 1.282-.103a4.316 4.316 0 0 0 1.09-.363a3.854 3.854 0 0 0 1.696-1.694a4.301 4.301 0 0 0 .362-1.083a10.533 10.533 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53Zm-9.773 12.41h-.003a7.126 7.126 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57Z" />
                                                        <path d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.918 5.918 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.834 1.834 0 0 1-1.202.847a2.443 2.443 0 0 1-1.122-.07a10.276 10.276 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.463 3.463 0 0 1-.728-1.842a1.997 1.997 0 0 1 .624-1.485a.655.655 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.328.328 0 0 1 .015.312a1.216 1.216 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.366 5.366 0 0 0 .991 1.234a4.863 4.863 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.488 1.488 0 0 1-.104.847Z" />
                                                    </svg>
                                                    <span className="pl-2">
                                                        WhatsApp
                                                    </span>
                                                </a>
                                            </p>
                                            <p className="pb-1">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="https://www.instagram.com//"
                                                >
                                                    <svg
                                                        className="h-6 w-6 inline"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        stroke="none"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" />
                                                    </svg>
                                                    <span className="pl-2">
                                                        Instagram
                                                    </span>
                                                </a>
                                            </p>
                                            <p className="pb-1">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="https://twitter.com/"
                                                >
                                                    <svg
                                                        className="h-6 w-6 inline"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        stroke="none"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z" />
                                                    </svg>
                                                    <span className="pl-2">
                                                        Twitter
                                                    </span>
                                                </a>
                                            </p>
                                            <p className="pb-1">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="https://facebook.com/"
                                                >
                                                    <svg
                                                        className="h-6 w-6 inline"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        stroke="none"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z" />
                                                    </svg>
                                                    <span className="pl-2">
                                                        Facebook
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-cyan-800 border-t">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="capitalize text-gray-100 py-4 text-center text-xs">
                            &copy; {new Date().getFullYear()}{" "}
                            {data.site.siteMetadata?.title} All Rights Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout;
