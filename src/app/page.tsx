import Link from "next/link"
import Image from "next/image"
import {differenceInYears} from "date-fns"
import {ArrowUpRight, Code2, Mail, Package, TerminalSquare} from "lucide-react"
import {Dialog, DialogTrigger} from "@/components/ui/dialog"
import ContactDialog from "@/components/assets/contact-dialog"
import {GithubIcon, InstagramIcon} from "@/components/assets/icons"
import {DATA} from "../data/data"
import {ResumeCard} from "@/components/assets/resume-card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {googleSearchLink} from "@/lib/utils"
import BlurFade from "@/components/magicui/blur-fade"
import {ThemeToggle} from "@/components/assets/theme-toggle"
import type React from "react"

/** Base delay unit (seconds) for staggered BlurFade animations. Each section
 *  multiplies this by an integer so content fades in top-to-bottom in sequence. */
const BLUR_FADE_DELAY = 0.05

/**
 * Composes a Radix Dialog + DialogTrigger + ContactDialog so any element can
 * open the contact sheet without repeating the Dialog boilerplate.
 * @param children - Element rendered as the dialog trigger (must accept a ref).
 */
function ContactDialogWrapper({ children }: { children: React.ReactElement }) {
   return (
      <Dialog>
         <DialogTrigger render={children} />
         <ContactDialog />
      </Dialog>
   )
}

/**
 * Labelled row of skill badges, each linking to a Google search via {@link googleSearchLink}.
 * @param icon - Lucide icon used as the category indicator.
 * @param label - Category label shown in a secondary badge beside the icon.
 * @param items - Skill names to render as individual linked badges.
 */
function SkillRow({icon: Icon, label, items}: {
    icon: React.ComponentType<{ size?: string | number }>;
    label: string;
    items: string[];
}) {
    return (
        <div className="flex flex-wrap items-start gap-x-4 my-1">
            <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                <Badge variant="secondary" className="h-6 flex-shrink-0"><Icon size="15px"/>&nbsp;&nbsp;{label}</Badge>
                {items.map((item, id) => (
                    <Link key={id} target="_blank" href={googleSearchLink(item)}>
                        <Badge className="h-6">{item}</Badge>
                    </Link>
                ))}
            </div>
        </div>
    )
}

/**
 * Root portfolio page.
 * Age is computed at render time with `date-fns` `differenceInYears` against
 * `DATA.dateOfBirth` (slashes replaced with hyphens to produce a valid Date string).
 * Injects Schema.org `Person` JSON-LD via `dangerouslySetInnerHTML` because Next.js
 * does not support `<script>` with dynamic content as JSX literals.
 * All sections are staggered using multiples of {@link BLUR_FADE_DELAY}.
 */
export default function Home() {
    const age = differenceInYears(new Date(), new Date(DATA.dateOfBirth.replace(/\//g, "-")))

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Till Hoffmann",
                        url: "https://tillhfm.de",
                        image: "https://tillhfm.de/me.jpg",
                        jobTitle: "Junior-Softwareentwickler",
                        worksFor: {
                            "@type": "Organization",
                            name: "XIMA MEDIA GmbH",
                            url: "https://xima.de",
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Dresden",
                            addressRegion: "Sachsen",
                            addressCountry: "DE",
                        },
                        sameAs: [
                            "https://github.com/tillhfm",
                            "https://instagram.com/hm.till",
                        ],
                        knowsAbout: [
                            "Java", "TypeScript", "Python", "Kotlin",
                            "SpringBoot", "Next.js", "Docker", "Linux",
                        ],
                        email: "mailto:hallo@tillhfm.de",
                    }),
                }}
            />
            <section id="header" className="">
                <div className="flex justify-between items-center pt-10 sm:pt-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ThemeToggle/>
                    </BlurFade>
                    <div className="flex items-center space-x-6">
                        <BlurFade delay={BLUR_FADE_DELAY * 23}>
                            <Link href={DATA.githubUrl} target="_blank"
                                  className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                                <GithubIcon className="size-4"/> <span>Github</span>
                            </Link>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 20}>
                            <Link href={DATA.instagramUrl} target="_blank"
                                  className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                                <InstagramIcon className="size-4"/> <span>Instagram</span>
                            </Link>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 17}>
                            <ContactDialogWrapper>
                        <span
                            className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                           <Mail className="size-4"/> <span>Kontakt</span>
                        </span>
                            </ContactDialogWrapper>
                        </BlurFade>
                    </div>
                </div>
            </section>

            <section id="home" className="">
                <div className="gap-2 flex items-center justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFade delay={BLUR_FADE_DELAY * 3} className="">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
                                Hey, ich bin Till 👋
                            </h1>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 9} className="">
                            <p className="max-w-[280px] sm:max-w-[400px] sm:text-xl">
                                Jr.-Softwareentwickler und Abiturient aus&nbsp;
                                <Link href="https://maps.app.goo.gl/vFse1x3xYQm23W2u5" target="_blank"
                                      className="inline-block w-fit bg-secondary pr-1 rounded items-center">
                                    <ArrowUpRight className="inline stroke-[1.5]"/>Dresden, SN.
                                </Link>
                            </p>
                        </BlurFade>
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <div
                            className="size-[5.3rem] sm:size-32 border rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src="/me.jpg" alt="Till Hoffmann" fill className="object-cover" priority/>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <h2 className="text-xl font-bold">Kurzbiografie</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 13}>
                    <p className="mt-1 prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
                        Im Alter von ca. 12 Jahren habe ich angefangen, an Minecraft-Mehrspielerservern zu arbeiten,
                        woraus sich meine Liebe zur Informatik entwickelte. Mittlerweile bin ich in vielen Feldern
                        dieser erfahren. Nebenbei mache ich Musik, beschäftige mich mit händischer Modeherstellung und
                        arbeite an verschiedenen Projekten, während ich mein Abitur mache. Aktuell bin ich {age} Jahre
                        alt.
                    </p>
                </BlurFade>
            </section>

            <section id="current-work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 15}>
                        <h2 className="text-xl font-bold">Arbeitserfahrung</h2>
                    </BlurFade>
                    {DATA.experience.map((work, id) => (
                        <BlurFade
                            key={id}
                            delay={BLUR_FADE_DELAY * 17 + BLUR_FADE_DELAY * 1.6 * id}
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
                    <BlurFade delay={BLUR_FADE_DELAY * 28}>
                        <h2 className="text-xl font-bold">Skills</h2>
                        <p className="text-sm text-muted-foreground">Klick auf Elemente für Google-Suche</p>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 30}>
                        <div className="flex flex-col gap-y-1">
                            <SkillRow icon={Code2} label="Sprachen" items={DATA.skills}/>
                            <SkillRow icon={Package} label="Frameworks" items={DATA.frameworks}/>
                            <SkillRow icon={TerminalSquare} label="Tools" items={DATA.tools}/>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 32}>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Kontakt
                            </h2>
                            <p className="pb-1 mx-auto max-w-[600px] text-base/snug text-muted-foreground sm:text-lg/relaxed md:text-xl/relaxed">
                                Kontaktiere mich via Email oder auch kostenlos per Telefon.
                            </p>
                            <div className="flex justify-center items-center space-x-3">
                                <ContactDialogWrapper>
                                    <Button className="flex items-center space-x-2">
                                        <Mail className="size-4"/> <span>Kontaktdaten</span>
                                    </Button>
                                </ContactDialogWrapper>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>
            <section id="footer" className="pb-10">
                <BlurFade delay={BLUR_FADE_DELAY * 34} className="flex flex-col items-center text-sm space-y-1">
                    <div>
                        Copyright © 2024-2026,&nbsp;
                        Till Hoffmann
                    </div>
                    <div>
                        Inspired by&nbsp;
                        <Link href="https://dillion.io/" target="_blank"
                              className="underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                            Dillion Verma
                        </Link>
                    </div>
                </BlurFade>
            </section>
        </main>
    );
}
