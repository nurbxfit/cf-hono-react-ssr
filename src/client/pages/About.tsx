// src/client/pages/About.tsx
export const About = (props: any) => {
    return (
        <div className="max-w-2xl mx-auto py-12 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">About This Project</h1>
            <p className="text-lg text-gray-600 mb-6">
                This is a simple starter template showcasing{" "}
                <strong>Hono + React SSR</strong> with hydration on the client.
            </p>
            <p className="text-gray-500">
                The goal is to demonstrate how server-rendered HTML can seamlessly
                hydrate into a live React app with state, navigation, and UI components.
            </p>
            <hr />
            <p className="text-gray-600">
                {props.message}
            </p>
        </div>
    )
}
