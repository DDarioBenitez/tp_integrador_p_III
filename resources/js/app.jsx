import { createInertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { createRoot } from "react-dom/client";

// Esto carga todo el árbol de Pages
const pages = import.meta.glob("./Pages/**/*.jsx");

createInertiaApp({
    resolve: (name) => {
        const page = pages[`./Pages/${name}.jsx`];
        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }
        return page().then((module) => module.default);
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
