"use client"

import { useState } from "react"
import { Button } from "./ui/button";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-medium">Count: {count}</p>
            <div className="flex gap-4">
                <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
                <Button
                    variant="outline"
                    onClick={() => setCount(0)}
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}