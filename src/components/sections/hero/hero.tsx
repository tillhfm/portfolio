import Link from 'next/link'
import React from 'react'
import InstagramIcon from '../../assets/instagram-icon'
import { Mail } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import ContactDialog from '@/components/assets/contact-dialog'

const HeroSection = () => {
   return (
      <section id="home" className='h-full'>

         <div className="w-full h-full flex items-center justify-center p-14">
            <div>
               
               <h1 className="flex justify-center text-center text-4xl font-bold">
                  An dieser Seite arbeite ich noch..
               </h1>
               <div className='flex justify-center'>
               <div className='font-medium pt-2'>
                  - Till, tillhfm.de
               </div>
               </div>
               <div className="w-full flex justify-center text-lg space-x-6 mt-6">
                  <Link href="https://instagram.com/trxsson" target="_blank" className='flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors'>
                     <InstagramIcon style={{ width: '16px' }} /> <span>Instagram</span>
                  </Link>
                  <Dialog>
                     <DialogTrigger asChild>
                        <Link href="#" className='flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors'>
                           <Mail style={{ width: '17px' }} /> <span>Kontakt</span>
                        </Link>
                     </DialogTrigger>
                     <ContactDialog/>
                  </Dialog>
                  
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection