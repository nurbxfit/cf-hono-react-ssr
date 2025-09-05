import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const routes = {
    home: { Component: Home, Layout: MainLayout },
    about: { Component: About, Layout: MainLayout },
    notFound: { Component: NotFound, Layout: MainLayout },
}

export type RouteKey = keyof typeof routes;