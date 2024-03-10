import * as React from "react";

export default function ProductListTitle({ title }) {
    return (
        <h2 className="flex bg-primary text-2xl font-bold tracking-tight text-white px-6 py-2 rounded-t-lg">
            {title}
        </h2>
    );
}
