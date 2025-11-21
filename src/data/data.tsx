import { GithubIcon, InstagramIcon, YouTubeIcon } from "@/components/assets/icons";
import { GlobeIcon } from "lucide-react";

export const DATA: {
   instagramUrl: string;
   githubUrl: string;
   websiteUrl: string;
   emailAddress: string;
   phoneNumber: string;
   dateOfBirth: string;
   skills: string[];
   frameworks: string[];
   tools: string[];
   experience: {
      institution: string,
      references: {
         url: string;
         name: string;
         icon: React.JSX.Element;
      }[],
      title: string,
      logoSrc: string,
      description: string,
      start: string,
      end?: string,
   }[];
} = {
   instagramUrl: "https://instagram.com/hm.till",
   githubUrl: "https://github.com/tillhfm",
   websiteUrl: "https://tillhfm.de",
   emailAddress: "hallo@tillhfm.de",
   phoneNumber: "+49 162 6061774",
   dateOfBirth: "2007/07/11",
   skills: [
      "Java",
      "TypeScript",
      "Python",
      "Kotlin",
   ],
   frameworks: [
      "SpringBoot",
      "JSF",
      "Next.js"
   ],
   tools: [
      "Docker",
      "git",
      "Linux",
      "Jetbrains IDEs",
      "Cloudflare",
      "Jira"
   ],
   experience: [
      {
         institution: "XIMA MEDIA GmbH",
         references: [
            {
               url: "https://xima.de",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            },
         ],
         title: "Jr.-Softwareentwickler (Festanstellung)",
         logoSrc: "/xima.jpg",
         start: "Feb. 2024",
         description:
            "Junior-Softwareentwickler für Fullstack-Anwendungen in Java Enterprise Umgebungen.",
         },
         {
            institution: "dreamsdontsleep",
            references: [
               {
                  url: "https://instagram.com/dreamsdontsleeep",
                  name: "Instagram",
                  icon: <InstagramIcon className="size-4" />
               }
            ],
            title: "Entwickler & Administrator",
            logoSrc: "/dds.jpeg",
            start: "Jan. 2024",
            description:
                "Systemadministration und Entwicklung von Java- und React-Anwendungen.",
      },
      {
         institution: "nordtal.eu",
         references: [
            {
               url: "https://www.nordtal.eu/",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            }
         ],
         title: "Organisator, Entwickler & Administrator",
         logoSrc: "/nordtal.png",
         start: "Jan. 2024",
         end: "Pausiert",
         description:
             "Der jährliche Minecraft-Server, auf dem jeder mitspielen darf - jedes Jahr aufwendiger.",
      },
      {
         institution: "SimpleCloud",
         references: [
            {
               url: "https://simplecloud.app",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            },
            {
               url: "https://github.com/simplecloudapp",
               name: "Github",
               icon: <GithubIcon className="size-4" />
            },
            {
               url: "https://github.com/theSimpleCloud",
               name: "Github (alt)",
               icon: <GithubIcon className="size-4" />
            },
         ],
         title: "Maintainer (Softwareentwickler)",
         logoSrc: "/simplecloud.png",
         start: "Mai 2024",
         end: "Feb. 2025",
         description:
            "Mitwirkung an der Entwicklung und Dokumentation der v3.",
      },
      {
         institution: "adesso SE",
         references: [
            {
               url: "https://adesso.de",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            }
         ],
         title: "Praktikant (Softwareentwickler)",
         logoSrc: "/adesso.png",
         start: "Apr. 2023",
         end: "Mai 2023",
         description:
            "Entwicklung einer Fullstack-Webapp mit SpringBoot und Thymeleaf.",
      },
      {
         institution: "Jeracraft.net",
         references: [
            {
               url: "https://www.youtube.com/@Jeracraft",
               name: "YouTube",
               icon: <YouTubeIcon className="size-4" />
            }
         ],
         title: "Stellv. Entwicklungsleitung",
         logoSrc: "/jeracraft.jpg",
         start: "Dez. 2022",
         end: "Jun. 2023",
         description:
            "Entwicklung und stellvertretende Leitung der Entwicklung an einem Minecraft Netzwerk mit Ø 200 zugleich aktiven Spielern.",
      },
   ],
}
