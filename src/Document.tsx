import { ViteClient, Link, Script } from "vite-ssr-components/react"

export function Document({ children }: { children: string }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>Hono + React SSR</title>

                {/* inject React Refresh preamble manually */}
                <script type="module">
                    {`
            import RefreshRuntime from "/@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
          `}
                </script>

                <ViteClient />
                <Link rel="stylesheet" href="/src/style.css" />
                <Script src="/src/main.tsx" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
            </body>
        </html>
    )
}
