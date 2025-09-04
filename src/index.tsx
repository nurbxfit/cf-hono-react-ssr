import { Hono } from "hono"
import { renderToString } from "react-dom/server"
import App from "./App"
import { Document } from "./Document"

const app = new Hono()

app.get("*", (c) => {
  const body = renderToString(<App />)
  const html = renderToString(<Document>{body}</Document>)
  return c.html("<!DOCTYPE html>" + html)
})

export default app
