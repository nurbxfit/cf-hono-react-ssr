// src/types/hono.d.ts
import type { JSX } from "react"

declare module "hono" {
    interface Context {
        reactRender: (component: JSX.Element, options?: {
            layout?: (content: JSX.Element) => JSX.Element
            title?: string
        }) => Response
    }
}
