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
import { DATA } from "../../data/data"

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
                  className={buttonVariants({ variant: "secondary" }) + " space-x-2"}
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