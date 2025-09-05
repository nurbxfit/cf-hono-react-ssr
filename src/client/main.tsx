import ReactDOM from "react-dom/client"
import { RouteKey, routes } from "./routes"
import "./style.css"
import { MainLayout } from "./layouts/MainLayout"

const root = document.getElementById("root")!
const page = (window as any).__PAGE__
const props = (window as any).__PROPS__ || {}

const Component = routes[page as RouteKey]

ReactDOM.hydrateRoot(root,
    <MainLayout>
        <Component {...props} />
    </MainLayout>

) // trying to dynamically change components for hydrations 