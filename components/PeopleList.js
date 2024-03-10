import * as React from "react";
import Link from "next/link";

export default function PeopleList({ people }) {
    return (
        <div className="bg-white">
            <div>
                <ul className="divide-y divide-gray-100">
                    {people.map((person) => (
                        <li
                            key={person.slug}
                            className="flex justify-between gap-x-6 py-5"
                        >
                            <div className="flex min-w-0 gap-x-4">
                                <img
                                    src={person.imageSrc}
                                    alt={person.name}
                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {person.name}
                                    </p>
                                    <Link
                                        href={"/author/" + person.slug}
                                        className="font-medium text-primary hover:text-secondary"
                                    >
                                        View Books
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">
                                    {person.affiliation}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Published {person.totalPublication} book
                                    {person.totalPublication > 1 ? "s" : ""}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
