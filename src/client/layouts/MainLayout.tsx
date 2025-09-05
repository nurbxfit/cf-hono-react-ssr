import { ReactNode } from "react"
import { Button } from "@/components/ui/button"

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Navbar */}
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">⚡ Hono + React SSR</h1>
                    <nav className="flex gap-4">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/about" className="hover:underline">About</a>
                        <a href="/todos" className="hover:underline">Todos</a>
                    </nav>
                    <Button variant="outline" size="sm">
                        Contact Us
                    </Button>
                </div>
            </header>

            {/* Page content */}
            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
                Built with ❤️ using Hono + React
            </footer>
        </div>
    )
}
