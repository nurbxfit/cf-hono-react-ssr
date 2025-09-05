import { ViteClient, Link, Script } from "vite-ssr-components/react"

const isDev = process.env.NODE_ENV !== "production"

export function Document({
    children,
    title = "Hono + React SSR",
}: {
    children: string
    title?: string
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>{title}</title>

                {isDev && (
                    <script type="module">
                        {`
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            `}
                    </script>
                )}

                <ViteClient />
                <Link rel="stylesheet" href="/src/client/style.css" />
                <Script src="/src/client/main.tsx" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
            </body>
        </html>
    )
}
