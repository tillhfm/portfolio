"use client"

import ContactDialog from "@/components/assets/contact-dialog"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import type React from "react"

export function ContactDialogWrapper({ children }: { children: React.ReactElement }) {
    return <ContactDialog trigger={children} />
}

export function ContactNavLink() {
    return (
        <ContactDialog
            trigger={
                <button
                    type="button"
                    className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors cursor-pointer">
                    <Mail className="size-3.5" />
                    <span className="text-sm">Kontakt</span>
                </button>
            }
        />
    )
}

export function ContactSectionButton() {
    return (
        <ContactDialog
            trigger={
                <Button className="flex items-center space-x-2">
                    <Mail className="size-4" /> <span>Kontaktdaten</span>
                </Button>
            }
        />
    )
}
