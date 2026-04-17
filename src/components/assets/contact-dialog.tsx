"use client"

import { Copy, Mail, Phone } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
   DialogClose,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { DATA } from "../../data/data"

/**
 * Radix UI dialog content with email and phone contact options.
 * `onOpenAutoFocus` is suppressed to prevent the dialog stealing focus from the trigger.
 * The phone `tel:` href uses the number with spaces stripped; the same stripped value
 * is copied to clipboard so the OS dialler receives a clean digit string.
 */
const ContactDialog = () => {
   /**
    * Copies `value` to the system clipboard and shows a toast notification.
    * @param value - String to write to the clipboard.
    * @param title - Label used in the toast (e.g. "Email-Adresse").
    */
   const handleCopy = async ( value: string, title: string) => {
      navigator.clipboard.writeText(value).then(() => {
         toast.success(`${title} kopiert!`)
      }).catch(() => {
         toast.error(`Kopieren fehlgeschlagen! (${title})`)
      });
   };

   return (
      <DialogContent className="sm:max-w-md">
         <DialogHeader>
            <DialogTitle>Kontaktiere mich via</DialogTitle>
         </DialogHeader>
         <div className="flex items-end space-x-2">
            <div className="grid flex-1 gap-2">
               <Label htmlFor="email" className="">
                  Email
               </Label>
               <Link
                  className={cn(buttonVariants({ variant: "secondary" }), "space-x-2")}
                  id="email"
                  href={`mailto:${DATA.emailAddress}`}
               >
                  <Mail className="h-4 w-4" /> <span>{DATA.emailAddress}</span>
               </Link>
            </div>
            <Button type="submit" size="icon" variant="default" onClick={() => handleCopy(DATA.emailAddress, 'Email-Adresse')} className="px-3">
               <span className="sr-only">Email-Adresse Kopieren</span>
               <Copy className="h-4 w-4" />
            </Button>
         </div>
         <div className="flex items-end space-x-2">
            <div className="grid flex-1 gap-2">
               <Label htmlFor="phone" className="">
                  Telefon
               </Label>
               <Link
                  className={cn(buttonVariants({ variant: "secondary" }), "space-x-2")}
                  id="phone"
                  href={`tel:${DATA.phoneNumber.replaceAll(" ", "")}`}
               >
                  <Phone className="h-4 w-4" /> <span>{DATA.phoneNumber}</span>
               </Link>
            </div>
            <Button type="submit" size="icon" variant="default" onClick={() => handleCopy(DATA.phoneNumber.replaceAll(" ", ""), 'Telefonnummer')} className="px-3">
               <span className="sr-only">Telefonnummer Kopieren</span>
               <Copy className="h-4 w-4" />
            </Button>
         </div>
         <DialogFooter className="sm:justify-start">
            <DialogClose render={<Button type="button" variant="secondary" />}>
               Erledigt 🤝
            </DialogClose>
         </DialogFooter>
      </DialogContent>
   )
}

export default ContactDialog
