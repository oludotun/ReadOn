import * as React from "react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    XMarkIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import navData from "../data/navigation.json";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const navigation = navData;

    return (
        <div className="bg-white">
            {/* Mobile Navigation Menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-30 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-30 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map(
                                                (category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                selected
                                                                    ? "border-primary text-primary"
                                                                    : "border-transparent text-gray-900",
                                                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                )
                                            )}
                                        </Tab.List>
                                    </div>
                                    {/* Feature Books in Mobile Navigation Panel */}
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map(
                                            (category) => (
                                                <Tab.Panel
                                                    key={category.name}
                                                    className="space-y-10 px-4 pb-8 pt-10"
                                                >
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {category.featured.map(
                                                            (item) => (
                                                                <div
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    className="group relative text-sm"
                                                                >
                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                        <img
                                                                            src={
                                                                                item.imageSrc
                                                                            }
                                                                            alt={
                                                                                item.imageAlt
                                                                            }
                                                                            className="object-cover object-center"
                                                                        />
                                                                    </div>
                                                                    <Link
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        className="mt-6 block font-medium text-gray-900"
                                                                    >
                                                                        <span
                                                                            className="absolute inset-0 z-10"
                                                                            aria-hidden="true"
                                                                        />
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Link>
                                                                    <p
                                                                        aria-hidden="true"
                                                                        className="mt-1"
                                                                    >
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    {category.sections.map(
                                                        (section) => (
                                                            <div
                                                                key={
                                                                    section.name
                                                                }
                                                            >
                                                                <p
                                                                    id={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="font-medium text-gray-900"
                                                                >
                                                                    {
                                                                        section.name
                                                                    }
                                                                </p>
                                                                <ul
                                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="mt-6 flex flex-col space-y-6"
                                                                >
                                                                    {section.items.map(
                                                                        (
                                                                            item
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    item.name
                                                                                }
                                                                                className="flow-root"
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        "/categories/" +
                                                                                        item.slug
                                                                                    }
                                                                                    className="-m-2 block p-2 text-gray-500"
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                </Tab.Panel>
                                            )
                                        )}
                                    </Tab.Panels>
                                    {/* End of featured books */}
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div
                                            key={page.name}
                                            className="flow-root"
                                        >
                                            <Link
                                                href={page.href}
                                                className="-m-2 block p-2 font-medium text-gray-900"
                                            >
                                                {page.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <Link
                                            href="/login"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link
                                            href="/signup"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Create account
                                        </Link>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <Link
                                        href="/help"
                                        className="-m-2 flex items-center p-2"
                                    >
                                        <QuestionMarkCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-1 block text-base font-medium text-gray-900">
                                            Help
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </Link>
                                </div>
                                {/* End of mobile navigation links */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            {/* End of Mobile Navigation Menu */}

            {/* Desktop Nav Menu */}
            <header className="fixed top-0 w-full bg-white z-30 border-b border-gray-200">
                {/* Header Information bar */}
                <p className="flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Excepteur sint occaecat cupidatat non proident,
                </p>
                {/* Navigation Menu starts here */}
                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="">
                        <div className="flex h-16 items-center">
                            {/* Mobile Nav Button (only visible on mobiles) */}
                            <button
                                type="button"
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        src="/wp1/images/logo.png"
                                        alt="ReadOn Logo"
                                        className="h-14"
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus and navigation links on the left side */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {/* Categories */}
                                    {navigation.categories.map((category) => (
                                        <Popover
                                            key={category.name}
                                            className="flex"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? "border-primary text-primary"
                                                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                className="absolute inset-0 top-1/2 bg-white shadow"
                                                                aria-hidden="true"
                                                            />

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map(
                                                                                (
                                                                                    item
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            item.name
                                                                                        }
                                                                                        className="group relative text-base sm:text-sm"
                                                                                    >
                                                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                            <img
                                                                                                src={
                                                                                                    item.imageSrc
                                                                                                }
                                                                                                alt={
                                                                                                    item.imageAlt
                                                                                                }
                                                                                                className="object-cover object-center"
                                                                                            />
                                                                                        </div>
                                                                                        <Link
                                                                                            href={
                                                                                                "/products/" +
                                                                                                item.slug
                                                                                            }
                                                                                            className="mt-6 block font-medium text-gray-900"
                                                                                        >
                                                                                            <span
                                                                                                className="absolute inset-0 z-10"
                                                                                                aria-hidden="true"
                                                                                            />
                                                                                            {
                                                                                                item.name
                                                                                            }
                                                                                        </Link>
                                                                                        <p
                                                                                            aria-hidden="true"
                                                                                            className="mt-1"
                                                                                        >
                                                                                            Shop
                                                                                            now
                                                                                        </p>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                            {category.sections.map(
                                                                                (
                                                                                    section
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            section.name
                                                                                        }
                                                                                    >
                                                                                        <p
                                                                                            id={`${section.name}-heading`}
                                                                                            className="font-medium text-gray-900"
                                                                                        >
                                                                                            {
                                                                                                section.name
                                                                                            }
                                                                                        </p>
                                                                                        <ul
                                                                                            aria-labelledby={`${section.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section.items.map(
                                                                                                (
                                                                                                    item
                                                                                                ) => (
                                                                                                    <li
                                                                                                        key={
                                                                                                            item.name
                                                                                                        }
                                                                                                        className="flex"
                                                                                                    >
                                                                                                        <Link
                                                                                                            href={
                                                                                                                "/categories/" +
                                                                                                                item.slug
                                                                                                            }
                                                                                                            className="hover:text-gray-800"
                                                                                                        >
                                                                                                            {
                                                                                                                item.name
                                                                                                            }
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                    {/* End of Categories */}

                                    {/* Other Navigation links without Flyout */}
                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Group>

                            {/* Navigation links on the right side */}
                            <div className="ml-auto flex items-center">
                                {/* Sign in or Sign up */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link
                                        href="/login"
                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        Sign in
                                    </Link>
                                    <span
                                        className="h-6 w-px bg-gray-200"
                                        aria-hidden="true"
                                    />
                                    <Link
                                        href="/signup"
                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        Create account
                                    </Link>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <Link
                                        href="#"
                                        className="p-2 text-gray-700 hover:text-gray-800"
                                    >
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>

                                {/* Help & Support */}
                                <div className="flex lg:ml-6">
                                    <Link
                                        href="/help"
                                        className="flex items-center text-gray-700 hover:text-gray-8000"
                                    >
                                        <span className="sr-only">
                                            Help & Support
                                        </span>
                                        <QuestionMarkCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-1 block text-sm font-medium">
                                            Help
                                        </span>
                                    </Link>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link
                                        href="/cart"
                                        className="group -m-2 flex items-center p-2"
                                    >
                                        <ShoppingCartIcon
                                            className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-800"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                            0
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
