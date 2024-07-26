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
import { useToast } from "@/components/ui/use-toast"

const ContactDialog = () => {
   const { toast } = useToast();

   const handleCopy = async ( value: string, title: string) => {
      navigator.clipboard.writeText(value).then(() => {
         toast({ title: title + " kopiert!", variant: "default",  })
      }).catch(() => {
         toast({ title: "Kopieren fehlgeschlagen! (" + title + ")", variant: "destructive" })
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
                  className={buttonVariants({ variant: "secondary" }) + " space-x-2"}
                  id="email"
                  href="mailto:mail@tillhfm.de"
               >
                  <Mail className="h-4 w-4" /> <span>mail@tillhfm.de</span>
               </Link>
            </div>
            <Button type="submit" size="icon" variant="default" onClick={() => handleCopy('mail@tillhfm.de', 'Email-Adresse')} className="px-3">
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
                  className={buttonVariants({ variant: "secondary" }) + " space-x-2"}
                  id="phone"
                  href="tel:+491626061774"
               >
                  <Phone className="h-4 w-4" /> <span>+49 162 6061774</span>
               </Link>
            </div>
            <Button type="submit" size="icon" variant="default" onClick={() => handleCopy('+491626061774', 'Telefonnummer')} className="px-3">
               <span className="sr-only">Telefonnummer Kopieren</span>
               <Copy className="h-4 w-4" />
            </Button>
         </div>
         <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
               <Button type="button" variant="secondary">
                  Erledigt 🤝
               </Button>
            </DialogClose>
         </DialogFooter>
      </DialogContent>
   )
}

export default ContactDialog