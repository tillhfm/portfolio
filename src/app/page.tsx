import Link from "next/link"
import React from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import ContactDialog from "@/components/assets/contact-dialog"
import { GithubIcon, InstagramIcon } from "@/components/assets/icons"
import { DATA } from "../data/data"
import BlurFade from "@/components/magicui/blur-fade"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import moment from 'moment'
import { ResumeCard } from "@/components/assets/resume-card"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
   const age = moment().diff(moment(DATA.dateOfBirth, "YYYY/MM/DD"), "years")

   return (
      <main className="flex flex-col min-h-[100dvh] space-y-12">
         <section id="header" className="">
            <div className="flex justify-end space-x-6 pt-10 sm:pt-12">
            <BlurFade delay={1.25}>
                  <Link href={DATA.githubUrl} target="_blank" className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     <GithubIcon className="size-4" /> <span>Github</span>
                  </Link>
               </BlurFade>
               <BlurFade delay={1.4}>
                  <Link href={DATA.instagramUrl} target="_blank" className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     <InstagramIcon className="size-4" /> <span>Instagram</span>
                  </Link>
               </BlurFade>
               <BlurFade delay={1.65}>
                  <Dialog>
                     <DialogTrigger asChild>
                        <span className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                           <Mail className="size-4" /> <span>Kontakt</span>
                        </span>
                     </DialogTrigger>
                     <ContactDialog />
                  </Dialog>
               </BlurFade>
            </div>
         </section>

         <section id="home" className="">
            <div className="gap-2 flex items-center justify-between">
               <div className="flex-col flex flex-1 space-y-1.5">
                  <BlurFade delay={0.2} className="">
                     <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
                        Hey, ich bin Till 👋
                     </h1>
                  </BlurFade>
                  <BlurFade delay={0.6} duration={1.2} className="">
                     <p className="max-w-[280px] sm:max-w-[400px] sm:text-xl">
                        Ein Jr.-Softwareentwickler und Schüler aus&nbsp;
                        <Link href="https://maps.app.goo.gl/vFse1x3xYQm23W2u5" target="_blank" className="inline-block w-fit bg-secondary pr-1 rounded items-center">
                           <ArrowUpRight className="inline stroke-[1.5]" />Dresden, SN.
                        </Link>

                     </p>
                  </BlurFade>
               </div>
               <BlurFade delay={0.6} duration={1.2}>
                  <Avatar className="size-[5.3rem] sm:size-32 border">
                     <AvatarImage alt="Till Hoffmann" src="/me1.png" />
                     <AvatarFallback>TH</AvatarFallback>
                  </Avatar>
               </BlurFade>
            </div>
         </section>

         <section id="about">
            <BlurFade delay={1}>
               <h2 className="text-xl font-bold">Kurzbiografie</h2>
            </BlurFade>
            <BlurFade delay={1.15}>
               <p className="mt-1 prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  Mit ca. 12 Jahren habe ich angefangen, an Minecraft Mehrspieler-Servern zu arbeiten, woraus sich meine Leidenschaft zur Informatik entwickelte. Mittlerweile bin ich in vielen Feldern der IT erfahren. Zusätzlich mache ich Musik (Hip Hop), spiele Gitarre, starte eine kleine Modemarke und arbeite an verschiedenen Projekten, während ich mein Abitur mache. Aktuell bin ich {age} Jahre alt.
               </p>
            </BlurFade>
         </section>

         <section id="current-work">
            <div className="flex min-h-0 flex-col gap-y-3">
               <BlurFade delay={1.3}>
                  <h2 className="text-xl font-bold">Ich arbeite für</h2>
               </BlurFade>
               {DATA.currentWork.map((work, id) => (
                  <BlurFade
                     key={id}
                     delay={1.45 + id * 0.08}
                  >
                     <ResumeCard
                        key={id}
                        logoUrl={work.logoSrc}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        references={work.references}
                        period={`${work.start} - Aktuell`}
                        description={work.description}
                     />
                  </BlurFade>
               ))}
            </div>
         </section>

         <section id="current-work">
            <div className="flex min-h-0 flex-col gap-y-3">
               <BlurFade delay={1.6}>
                  <h2 className="text-xl font-bold">Und hier habe ich mal gearbeitet</h2>
               </BlurFade>
               {DATA.pastWork.map((work, id) => (
                  <BlurFade
                     key={id}
                     delay={1.75 + id * 0.08}
                  >
                     <ResumeCard
                        key={id}
                        logoUrl={work.logoSrc}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        references={work.references}
                        period={`${work.start} - ${work.end}`}
                        description={work.description}
                     />
                  </BlurFade>
               ))}
            </div>
         </section>

         <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
               <BlurFade delay={1.9}>
                  <h2 className="text-xl font-bold">Skills</h2>
               </BlurFade>
               <div className="flex flex-wrap gap-1 justify-center">
                  {DATA.skills.map((skill, id) => (
                     <BlurFade key={id} delay={2.05 + id * 0.05}>
                        <Badge key={id}>{skill}</Badge>
                     </BlurFade>
                  ))}
               </div>
            </div>
         </section>

         <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
               <BlurFade delay={2.2}>
                  <div className="space-y-3">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Kontaktiere mich
                     </h2>
                     <div className="space-y-4 mx-auto max-w-[600px] text-muted-foreground sm:text-lg/relaxed md:text-xl/relaxed">
                        <div>Lust zu reden? Kontaktiere mich gerne via Email / Telefon oder schreib&apos; mir eine DM auf Instagram.</div>

                        <div className="flex justify-center items-center space-x-3">
                           <Dialog>
                              <DialogTrigger asChild>
                                 <Button className="flex items-center space-x-2">
                                    <Mail className="size-4" /> <span>Kontakt</span>
                                 </Button>
                              </DialogTrigger>
                              <ContactDialog />
                           </Dialog>

                           <Link href={DATA.instagramUrl} target="_blank" className={cn("flex items-center space-x-2", buttonVariants({ variant: "link" }))}>
                              <InstagramIcon className="size-4" /> <span>Instagram</span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </BlurFade>
            </div>
         </section>
         <section id="footer" className="pb-10">
            <BlurFade delay={2.35} className="flex justify-center text-sm">
               <span>
                  Copyright © 2024,&nbsp;
                  <Link href="#" className="underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     Till Hoffmann
                  </Link>
                  &nbsp;&&nbsp;
                  <Link href="https://dillion.io/" className="underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     Dillion Verma
                  </Link>
               </span>
            </BlurFade>
         </section>
      </main>
   );
}
