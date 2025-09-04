import { ViteClient, Link } from "vite-ssr-components/hono"

export function Document({ children }: { children: string }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>Hono + React SSR</title>
                {/* <Link href="/src/style.css" rel="stylesheet" /> */}
                {/* <ViteClient /> */}
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
                <script type="module" src="/src/main.tsx"></script>
            </body>
        </html>
    )
}
