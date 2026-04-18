import Link from "next/link"
import Image from "next/image"
import {ArrowUpRight} from "lucide-react"
import {ContactNavLink, ContactSectionButton} from "@/components/assets/contact-dialog-wrapper"
import {GithubIcon, InstagramIcon} from "@/components/assets/icons"
import {DATA} from "@/data/data"
import {ResumeCard} from "@/components/assets/resume-card"
import {Badge} from "@/components/ui/badge"
import {Button, buttonVariants} from "@/components/ui/button"
import {googleSearchLink} from "@/lib/utils"
import BlurFade from "@/components/magicui/blur-fade"
import {ThemeToggle} from "@/components/assets/theme-toggle"
import {CurrentYear} from "@/components/assets/current-year"
import {WavingHand} from "@/components/assets/waving-hand"
import {cn} from "@/lib/utils"
import type React from "react"

/** Base delay unit (seconds) for staggered BlurFade animations. Each section
 *  multiplies this by an integer so content fades in top-to-bottom in sequence. */
const BLUR_FADE_DELAY = 0.05

/**
 * Labelled row of skill badges, each linking to a Google search via {@link googleSearchLink}.
 * @param icon - Lucide icon used as the category indicator.
 * @param label - Category label shown in a secondary badge beside the icon.
 * @param items - Skill names to render as individual linked badges.
 */
function SkillRow({icon, label, items}: {
    icon: React.JSX.Element;
    label: string;
    items: string[];
}) {
    return (
        <div className="flex gap-x-4 my-1">
            <Badge variant="secondary" className="h-6 flex-shrink-0 gap-x-2">
                <span className="[&>*]:h-3.5 [&>*]:w-3.5">{icon}</span>
                <span>{label}</span>
            </Badge>
            <div className="flex flex-wrap gap-x-1.5 gap-y-1">
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
 * Injects Schema.org `Person` JSON-LD via `dangerouslySetInnerHTML` because Next.js
 * does not support `<script>` with dynamic content as JSX literals.
 * All sections are staggered using multiples of {@link BLUR_FADE_DELAY}.
 */
export default function Home() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Till Hoffmann",
                        url: DATA.websiteUrl,
                        image: "https://tillhfm.de/me.jpg",
                        jobTitle: "Junior-Softwareentwickler Fullstack",
                        worksFor: {
                            "@type": "Organization",
                            name: DATA.experience[0].institution,
                            url: DATA.experience[0].references[0].url,
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Dresden",
                            addressRegion: "Sachsen",
                            addressCountry: "DE",
                        },
                        sameAs: [
                            DATA.githubUrl,
                            DATA.instagramUrl,
                        ],
                        knowsAbout: [
                            ...DATA.skills.flatMap((category) => category.items),
                        ],
                        email: `mailto:${DATA.emailAddress}`,
                    }),
                }}
            />
            <section id="header" className="">
                <div className="flex justify-between items-center pt-0 sm:pt-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ThemeToggle/>
                    </BlurFade>
                    <div className="flex items-center space-x-6">
                        <BlurFade delay={BLUR_FADE_DELAY * 23}>
                            <Link href={DATA.githubUrl} target="_blank"
                                  className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                                <GithubIcon className="size-3.5"/> <span className="text-sm">Github</span>
                            </Link>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 20}>
                            <Link href={DATA.instagramUrl} target="_blank"
                                  className="flex items-center space-x-2 underline underline-offset-2 decoration-2 decoration-transparent hover:decoration-zinc-950 hover:transition-colors">
                                <InstagramIcon className="size-3.5"/> <span className="text-sm">Instagram</span>
                            </Link>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 17}>
                            <ContactNavLink />
                        </BlurFade>
                    </div>
                </div>
            </section>

            <section id="home" className="">
                <div className="gap-2 flex items-center justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFade delay={BLUR_FADE_DELAY * 3} className="">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
                                Hey, ich bin Till <WavingHand/>
                            </h1>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 9} className="">
                            <p className="max-w-[280px] sm:max-w-[380px] sm:text-xl">
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
                            <Image src="/me.jpg" alt="Till Hoffmann" fill sizes="(min-width: 640px) 128px, 85px"
                                   className="object-cover" priority/>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <h2 className="text-xl font-bold">Kurz zu mir..</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 13}>
                    <p className="mt-1 prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert">
                        Mit ca. 12 Jahren habe ich durch das Computerspiel Minecraft angefangen zu programmieren –
                        seitdem habe ich mir selbstständig ein breites Wissen in der IT angeeignet, von
                        Softwareentwicklung über Systemadministration bis hin zu Hardware. Seit der 11. Klasse besuche
                        ich das Gymnasium Dresden-Pieschen, um Informatik als Leistungskurs im Abitur zu belegen und im
                        Herbst 2026 beginnt mein duales Informatik-Studium. In meiner Freizeit arbeite ich an
                        verschiedenen eigenen Projekten, darunter z.B. dieses Portfolio oder eine moderne ÖPNV-App für
                        Dresden, mit der ich momentan beginne.
                    </p>
                </BlurFade>
            </section>

            <section id="current-work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 15}>
                        <h2 className="text-xl font-bold">Arbeitserfahrung</h2>
                        <p className="text-sm text-muted-foreground">Klicke auf Elemente für Details</p>
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
                        <p className="text-sm text-muted-foreground">Klicke auf Elemente für Google-Suche</p>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 30}>
                        <div className="flex flex-col gap-y-1">
                            {DATA.skills.map((category, i) => (
                                <SkillRow key={i} icon={category.categoryIcon}
                                          label={category.categoryName}
                                          items={category.items}/>
                            ))}
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-6 sm:py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 32}>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Kontakt
                            </h2>
                            <p className="pb-1 mx-auto max-w-[600px] text-base/snug text-muted-foreground sm:text-lg/relaxed md:text-xl/relaxed">
                                Kontaktiere mich via Email oder auch per Telefon.
                            </p>
                            <div className="flex justify-center items-center space-x-3">
                                <ContactSectionButton />
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="footer" className="pb-10">
                <BlurFade delay={BLUR_FADE_DELAY * 34} className="flex flex-col items-center text-sm space-y-1">
                    <div>
                        Copyright © 2024-<CurrentYear/>, Till Hoffmann
                    </div>
                </BlurFade>
            </section>
        </main>
    );
}
