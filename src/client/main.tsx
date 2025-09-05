import ReactDOM from "react-dom/client"
import { RouteKey, routes } from "./routes"
import "./style.css"

const root = document.getElementById("root")!
const page = (window as any).__PAGE__
const props = (window as any).__PROPS__ || {}

const { Component, Layout } = routes[page as RouteKey]

ReactDOM.hydrateRoot(root,
    <Layout>
        <Component {...props} />
    </Layout>
) // trying to dynamically change components for hydrations 