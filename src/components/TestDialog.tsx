import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>SSR + Client Interactivity</DialogTitle>
                    <DialogDescription>
                        This dialog is rendered on the server, but it only{" "}
                        <span className="font-semibold">opens</span> once React
                        hydration is complete in the browser.
                        That means you get instant page load + full interactivity.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
