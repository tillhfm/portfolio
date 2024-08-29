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
   currentWork: {
      company: string,
      references: {
         url: string;
         name: string;
         icon: React.JSX.Element;
      }[],
      title: string,
      logoSrc: string,
      description: string,
      start: string,
   }[];
   pastWork: {
      company: string,
      references: {
         url: string;
         name: string;
         icon: React.JSX.Element;
      }[],
      title: string,
      logoSrc: string,
      description: string,
      start: string,
      end: string,
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
      "Go",
      "Kotlin",
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "Docker",
      "git",
      "Linux"
   ],
   currentWork: [
      {
         company: "XIMA MEDIA GmbH",
         references: [
            {
               url: "https://xima.de",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            },
         ],
         title: "Jr.-Softwareentwickler (Festanstellung)",
         logoSrc: "/xima.jpg",
         start: "Februar 2024",
         description:
            "Junior-Softwareentwickler für Fullstack-Anwendungen in Java Enterprise Umgebungen.",
      },
      {
         company: "SimpleCloud",
         references: [
            {
               url: "https://simplecloud.app",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            },
            {
               url: "https://github.com/theSimpleCloud",
               name: "Github",
               icon: <GithubIcon className="size-4" />
            },
         ],
         title: "Softwareentwickler, Content-Designer (ehrenamtlich)",
         logoSrc: "/simplecloud.png",
         start: "Mai 2024",
         description:
            "Mitwirkung an der Entwicklung der v3, Dokumentation und Eventplanung.",
      },
      {
         company: "dreamsdontsleep",
         references: [
            {
               url: "https://instagram.com/dreamsdontsleep",
               name: "Instagram",
               icon: <InstagramIcon className="size-4" />
            }
         ],
         title: "Entwicklungsleiter, Systemadministrator",
         logoSrc: "/dds.jpeg",
         start: "Januar 2024",
         description:
            "Mitwirkung an der Entwicklung der v3, Dokumentation und Eventplanung.",
      },
   ],
   pastWork: [
      {
         company: "adesso SE",
         references: [
            {
               url: "https://adesso.de",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            }
         ],
         title: "Praktikant (Softwareentwickler)",
         logoSrc: "/adesso.png",
         start: "April 2023",
         end: "Mai 2023",
         description:
            "Entwicklung einer Fullstack-Webapp mit SpringBoot und Thymeleaf.",
      },
      {
         company: "Jeracraft.net",
         references: [
            {
               url: "https://www.youtube.com/@Jeracraft",
               name: "YouTube",
               icon: <YouTubeIcon className="size-4" />
            }
         ],
         title: "Stellv. Entwicklungsleiter",
         logoSrc: "/jeracraft.jpg",
         start: "Dezember 2022",
         end: "Juni 2023",
         description:
            "Entwicklung und stellvertretende Leitung der Entwicklung am Minecraft Netzwerk des YouTubers Jeracraft.",
      },
      {
         company: "LTI music Veranstaltungslogistik GmbH",
         references: [
            {
               url: "https://lti-music.com",
               name: "Webseite",
               icon: <GlobeIcon className="size-4" />
            }
         ],
         title: "Aushilfe Veranstaltungstechnik",
         logoSrc: "/lti.svg",
         start: "Juli 2023",
         end: "August 2023",
         description:
            "Wartung & Logistik von Veranstaltungstechnik und Auf- und Abbau von Events.",
      },
   ],
}