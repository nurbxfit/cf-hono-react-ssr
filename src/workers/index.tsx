import { Hono } from "hono"
import App from "../client/App"
import { reactSSR } from "@/middlewares/reactSSR"
// import { serveStatic } from "hono/cloudflare-workers"

const app = new Hono()
// serve vite build output
// import manifest from "../../dist/client/.vite/manifest.json"

// app.use("/assets/*", serveStatic({ root: "./dist", manifest }))
// app.use("/manifest.json", serveStatic({ root: "./dist", manifest }))

app.use(reactSSR());

app.get("*", (c) => {

  return c.reactRender(
    <App />, { title: 'Home' }
  )
})

export default app
