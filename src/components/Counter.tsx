"use client"

import { useState } from "react"
import { Button } from "./ui/button";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setCount((c) => c + 1)}
            >
                Count: {count}
            </Button>

        </>
    )
}