import { renderToString } from "react-dom/server"
import { Document } from "../client/Document"
import type { Context } from "hono"
import { JSX } from "react"

type RenderOptions = {
    layout?: (content: JSX.Element) => JSX.Element
    title?: string
}

export function reactSSR(defaultOptions: RenderOptions = {}) {
    return (c: Context, next: () => Promise<void>) => {
        c.reactRender = (component: JSX.Element, options?: RenderOptions) => {
            const { layout, title } = { ...defaultOptions, ...options }
            const content = layout ? layout(component) : component
            const body = renderToString(content)
            const html = renderToString(<Document title={title} > {body} </Document>)
            return c.html("<!DOCTYPE html>" + html)
        }
        return next()
    }
}


