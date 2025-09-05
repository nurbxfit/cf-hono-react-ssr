// src/types/hono.d.ts
import { RouteKey } from "@/client/routes"
import { RenderOptions } from "@/middlewares/reactSSR"
import type { JSX } from "react"

declare module "hono" {
    interface Context {
        reactRender: (page: RouteKey, options?: RenderOptions) => Response
    }
}
