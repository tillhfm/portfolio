import Link from "next/link"
import React from "react"
import { ArrowUpRight, Code2, Mail, Package, TerminalSquare } from "lucide-react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import ContactDialog from "@/components/assets/contact-dialog"
import { GithubIcon, InstagramIcon } from "@/components/assets/icons"
import { DATA } from "../data/data"
import BlurFade from "@/components/magicui/blur-fade"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import moment from 'moment'
import { ResumeCard } from "@/components/assets/resume-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { googleSearchLink } from "@/lib/utils"

export default function Home() {
   const age = moment().diff(moment(DATA.dateOfBirth, "YYYY/MM/DD"), "years")

   return (
      <main className="flex flex-col min-h-[100dvh] space-y-12">
         <section id="header" className="">
            <div className="flex justify-end space-x-6 pt-10 sm:pt-12">
               <BlurFade delay={1.15}>
                  <Link href={DATA.githubUrl} target="_blank" className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     <GithubIcon className="size-4" /> <span>Github</span>
                  </Link>
               </BlurFade>
               <BlurFade delay={1}>
                  <Link href={DATA.instagramUrl} target="_blank" className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     <InstagramIcon className="size-4" /> <span>Instagram</span>
                  </Link>
               </BlurFade>
               <BlurFade delay={0.85}>
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
                  <BlurFade delay={0.15} className="">
                     <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
                        Hey, ich bin Till 👋
                     </h1>
                  </BlurFade>
                  <BlurFade delay={0.45} className="">
                     <p className="max-w-[280px] sm:max-w-[400px] sm:text-xl">
                        Jr.-Softwareentwickler und Abiturient aus&nbsp;
                        <Link href="https://maps.app.goo.gl/vFse1x3xYQm23W2u5" target="_blank" className="inline-block w-fit bg-secondary pr-1 rounded items-center">
                           <ArrowUpRight className="inline stroke-[1.5]" />Dresden, SN.
                        </Link>
                     </p>
                  </BlurFade>
               </div>
               <BlurFade delay={0.15}>
                  <Avatar className="size-[5.3rem] sm:size-32 border">
                     <AvatarImage alt="Till Hoffmann" src="/me1.png" />
                     <AvatarFallback>TH</AvatarFallback>
                  </Avatar>
               </BlurFade>
            </div>
         </section>

         <section id="about">
            <BlurFade delay={0.55}>
               <h2 className="text-xl font-bold">Kurzbiografie</h2>
            </BlurFade>
            <BlurFade delay={0.65}>
               <p className="mt-1 prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
                  Im Alter von ca. 12 Jahren habe ich angefangen, an Minecraft Mehrspieler-Servern zu arbeiten, woraus sich meine Leidenschaft zur Informatik entwickelte. Mittlerweile bin ich in vielen Feldern derer erfahren. Nebenbei mache ich Musik, beschäftige mich mit händischer Modeherstellung und arbeite an verschiedenen Projekten, während ich mein Abitur mache. Aktuell bin ich {age} Jahre alt.
               </p>
            </BlurFade>
         </section>

         <section id="current-work">
            <div className="flex min-h-0 flex-col gap-y-3">
               <BlurFade delay={0.75}>
                  <h2 className="text-xl font-bold">Arbeitserfahrung</h2>
               </BlurFade>
               {DATA.experience.map((work, id) => (
                  <BlurFade
                     key={id}
                     delay={0.85 + 0.08 * id}
                  >
                     <ResumeCard
                        key={id}
                        logoUrl={work.logoSrc}
                        altText={work.institution}
                        title={work.institution}
                        subtitle={work.title}
                        references={work.references}
                        period={`${work.start} - ${work.end ? work.end : 'Aktuell'}`}
                        description={work.description}
                     />
                  </BlurFade>
               ))}
            </div>
         </section>

         <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
               <BlurFade delay={1.4}>
                  <h2 className="text-xl font-bold">Skills</h2>
                  <p className="text-sm text-muted-foreground">Klick auf Elemente für Google-Suche</p>
               </BlurFade>
               <BlurFade delay={1.5}>
                  <table>
                     <tr>
                        <td>
                           <Badge variant="secondary" className="h-6 mr-4"><Code2 size="15px" />&nbsp;&nbsp;Sprachen</Badge>
                        </td>
                        <td>
                           <div className="flex flex-wrap gap-x-1.5 my-3 gap-y-1">
                              {DATA.skills.map((skill, id) => (
                                 <Link key={id} target="_blank" href={googleSearchLink(skill)}>
                                    <Badge key={id} className="h-6">{skill}</Badge>
                                 </Link>
                              ))}
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <Badge variant="secondary" className="h-6 mr-4"><Package size="15px" />&nbsp;&nbsp;Frameworks</Badge>
                        </td>
                        <td>
                           <div className="flex flex-wrap gap-x-1.5 my-3 gap-y-1">
                              {DATA.frameworks.map((framework, id) => (
                                 <Link key={id} target="_blank" href={googleSearchLink(framework)}>
                                    <Badge key={id} className="h-6">{framework}</Badge>
                                 </Link>
                              ))}
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <Badge variant="secondary" className="h-6 mr-4"><TerminalSquare size="15px" />&nbsp;&nbsp;Tools</Badge>
                        </td>
                        <td>
                           <div className="flex flex-wrap gap-x-1.5 my-3 gap-y-1">
                              {DATA.tools.map((tool, id) => (
                                 <Link key={id} target="_blank" href={googleSearchLink(tool)}>
                                    <Badge key={id} className="h-6">{tool}</Badge>
                                 </Link>
                              ))}
                           </div>
                        </td>
                     </tr>
                  </table>
               </BlurFade>
            </div>
         </section>

         <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
               <BlurFade delay={1.6}>
                  <div className="space-y-2">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Kontakt
                     </h2>
                     <p className="pb-1 mx-auto max-w-[600px] text-base/snug text-muted-foreground sm:text-lg/relaxed md:text-xl/relaxed">
                        Kontaktiere mich via Email oder auch kostenlos per Telefon.
                     </p>
                     <div className="flex justify-center items-center space-x-3">
                        <Dialog>
                           <DialogTrigger asChild>
                              <Button className="flex items-center space-x-2">
                                 <Mail className="size-4" /> <span>Kontaktdaten</span>
                              </Button>
                           </DialogTrigger>
                           <ContactDialog />
                        </Dialog>
                     </div>
                  </div>
               </BlurFade>
            </div>
         </section>
         <section id="footer" className="pb-10">
            <BlurFade delay={1.7} className="flex flex-col items-center text-sm space-y-1">
               <div>
                  Copyright © 2024,&nbsp;
                  <Link href="#" className="underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     Till Hoffmann
                  </Link>
               </div>
               <div>
                  Inspired by&nbsp;
                  <Link href="https://dillion.io/" target="_blank" className="underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                     Dillion Verma
                  </Link>
               </div>
            </BlurFade>
         </section>
      </main>
   );
}
