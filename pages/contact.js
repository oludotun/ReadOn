import Layout from "../components/Layout";
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeOpenIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ContactUs() {
    return (
        <Layout>
            <div className="mt-16">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <h1 className="text-2xl">Contact Details</h1>
                        <div className="flex items-center my-4">
                            <MapPinIcon className="h-6 w-6 mr-2" />{" "}
                            <span className="font-bold pr-2"> Address:</span>
                            <span>123, Some Street, Lagos Nigeria</span>
                        </div>
                        <div className="flex items-center my-2">
                            <PhoneIcon className="h-6 w-6 mr-2" />{" "}
                            <span className="font-bold pr-2"> Phone:</span>
                            <span>+234 8012345678</span>
                        </div>
                        <div className="flex items-center my-2">
                            <EnvelopeOpenIcon className="h-6 w-6 mr-2" />{" "}
                            <span className="font-bold pr-2"> Email:</span>
                            <span>user@example.com</span>
                        </div>
                    </div>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Send us a message
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form
                                className="space-y-6"
                                action="#"
                                method="POST"
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="username@example.com"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Enter your full name here"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Your Message
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            placeholder="Type your message here"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Check our{" "}
                                <Link
                                    href="/help"
                                    className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
                                >
                                    help & support page
                                </Link>{" "}
                                for more information
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
