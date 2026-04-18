"use client"

import { Copy, Mail, Phone } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { DATA } from "../../data/data"
import { useMediaQuery } from "@/hooks/use-media-query"
import type React from "react"

const handleCopy = async (value: string, title: string) => {
    navigator.clipboard.writeText(value).then(() => {
        toast.success(`${title} kopiert!`)
    }).catch(() => {
        toast.error(`Kopieren fehlgeschlagen! (${title})`)
    })
}

function ContactItems() {
    return (
        <>
            <div className="flex items-end space-x-2">
                <div className="grid flex-1 gap-2">
                    <div className="text-sm font-medium">Email</div>
                    <Link
                        className={cn(buttonVariants({ variant: "secondary" }), "space-x-2")}
                        href={`mailto:${DATA.emailAddress}`}
                    >
                        <Mail className="h-4 w-4" /> <span>{DATA.emailAddress}</span>
                    </Link>
                </div>
                <Button type="button" size="icon" variant="default"
                    onClick={() => handleCopy(DATA.emailAddress, "Email-Adresse")} className="px-3">
                    <span className="sr-only">Email-Adresse Kopieren</span>
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex items-end space-x-2">
                <div className="grid flex-1 gap-2">
                    <div className="text-sm font-medium">Telefon</div>
                    <Link
                        className={cn(buttonVariants({ variant: "secondary" }), "space-x-2")}
                        href={`tel:${DATA.phoneNumber.replaceAll(" ", "")}`}
                    >
                        <Phone className="h-4 w-4" /> <span>{DATA.phoneNumber}</span>
                    </Link>
                </div>
                <Button type="button" size="icon" variant="default"
                    onClick={() => handleCopy(DATA.phoneNumber.replaceAll(" ", ""), "Telefonnummer")}
                    className="px-3">
                    <span className="sr-only">Telefonnummer Kopieren</span>
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
        </>
    )
}

/**
 * Renders a contact dialog on desktop and a bottom drawer on mobile.
 * Pass the trigger element as `trigger`; content and "Erledigt" button are shared.
 */
function ContactDialog({ trigger }: { trigger: React.ReactElement }) {
    const isMobile = useMediaQuery("(max-width: 767px)")

    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger asChild>{trigger}</DrawerTrigger>
                <DrawerContent className="pb-4">
                    <DrawerHeader>
                        <DrawerTitle>Kontaktiere mich via</DrawerTitle>
                    </DrawerHeader>
                    <div className="flex flex-col gap-4 px-4">
                        <ContactItems />
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button type="button" variant="secondary">Erledigt 🤝</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <Dialog>
            <DialogTrigger render={trigger} />
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Kontaktiere mich via</DialogTitle>
                </DialogHeader>
                <ContactItems />
                <DialogFooter className="sm:justify-start">
                    <DialogClose render={<Button type="button" variant="secondary" />}>
                        Erledigt 🤝
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ContactDialog
