import { Counter } from "./components/Counter";

export default function App() {
    return (
        <div className="flex h-screen items-center justify-center flex-col gap-4">
            <h1 className="text-3xl font-bold">Hello Hono + React SSR</h1>
            <Counter />
        </div>
    )
}
