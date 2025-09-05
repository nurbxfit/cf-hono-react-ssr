import { About } from "./pages/About";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const routes = {
    home: Home,
    about: About,
    notFound: NotFound
}

export type RouteKey = keyof typeof routes;