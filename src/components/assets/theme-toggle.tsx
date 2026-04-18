"use client"

import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button"
import {Moon, Sun} from "lucide-react"

export function ThemeToggle() {
    const {resolvedTheme, setTheme} = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Theme wechseln"
        >
            <Sun className="size-4 dark:hidden"/>
            <Moon className="size-4 hidden dark:block"/>
        </Button>
    )
}
