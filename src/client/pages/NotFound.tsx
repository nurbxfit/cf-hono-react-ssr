// src/client/pages/NotFound.tsx
export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-600">
                Oops! The page you are looking for doesn’t exist.
            </p>
            <a
                href="/"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go back Home
            </a>
        </div>
    )
}
