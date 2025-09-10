import { ViteClient, Link, Script, ReactRefresh } from "vite-ssr-components/react"

const isDev = process.env.NODE_ENV !== "production"

export function Document({
    children,
    title = "Hono + React SSR",
    page,
    propsScript,
}: {
    children: string
    title?: string
    page: string
    propsScript?: string
}) {

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>{title}</title>
                <ReactRefresh />
                <ViteClient />
                <Link rel="stylesheet" href="/src/client/style.css" />
                <Script src="/src/client/main.tsx" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: children }} />

                {/*  serialized props */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.__PAGE__ = ${JSON.stringify(page)};
               window.__PROPS__ = ${propsScript};
            `,
                    }}
                />
            </body>
        </html>
    )
}
