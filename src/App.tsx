import { Counter } from "./components/Counter";
import { DialogDemo } from "./components/TestDialog";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-50 p-8">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                    ⚡ Hono + React SSR + shadcn/ui
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    This page was <span className="font-semibold">server-rendered</span>{" "}
                    by Hono, then hydrated with React.
                    Try interacting with the counter or opening the dialog to see client-side behavior in action.
                </p>
            </div>
            <Counter />
            <DialogDemo />
        </div>
    )
}
