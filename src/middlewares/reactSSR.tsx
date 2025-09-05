import { renderToString } from "react-dom/server"
import { Document } from "../client/Document"
import type { Context } from "hono"
import { RouteKey, routes } from "@/client/routes"

export type RenderOptions = {
    title?: string
    page?: RouteKey
    props?: Record<string, unknown>
}

export function reactSSR(defaultOptions: RenderOptions = {}) {
    return (c: Context, next: () => Promise<void>) => {
        c.reactRender = (page: RouteKey, options?: RenderOptions) => {
            const { title, props } = { ...defaultOptions, ...options }
            const serializedProps = props && JSON.stringify(props).replace(/</g, "\\u003c")

            const { Component, Layout } = routes[page]
            const element = <Layout>
                <Component {...props} />
            </Layout>


            const body = renderToString(element)

            const html = renderToString(
                <Document title={title} page={page} propsScript={serializedProps}>
                    {body}
                </Document>
            )

            return c.html("<!DOCTYPE html>" + html)
        }
        return next()
    }
}

