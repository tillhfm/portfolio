import {Code2, GlobeIcon} from "lucide-react";
import React from "react";

/**
 * Central portfolio data store.
 * `dateOfBirth` uses `YYYY/MM/DD` (slash-separated) — consumers must replace
 * `/` with `-` before passing to `new Date()` (as done in {@link Home}).
 * Experience entries without an `end` value are treated as ongoing; the page
 * renders "Aktuell" in their place.
 */
export const DATA: {
    instagramUrl: string;
    githubUrl: string;
    websiteUrl: string;
    emailAddress: string;
    phoneNumber: string;
    dateOfBirth: Date;
    skills: {categoryName: string, categoryIcon: React.JSX.Element, items: string[]}[];
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
    dateOfBirth: new Date(2007, 6, 11), // eq. 11/07/2007
    skills: [
        {
            categoryName: "Sprachen",
            categoryIcon: <Code2/>,
            items: [
                "Java",
                "TypeScript",
                "Python",
                "Kotlin",
                "Swift"
            ],
        }
    ],
    experience: [
        {
            institution: "XIMA MEDIA GmbH",
            references: [
                {
                    url: "https://www.xima.de",
                    name: "Webseite",
                    icon: <GlobeIcon className="size-4"/>,
                },
            ],
            title: "Jr.-Softwareentwickler (Festanstellung)",
            logoSrc: "/xima.jpg",
            start: "Feb. 2024",
            description:
                "Junior-Fullstack-Softwareentwickler für Java und React Apps im öffentlichen Sektor. Ursprünglich als geringfügige Beschäftigung seit der 10. Klasse, ab  09/26 als Duales Studium. ",
        },
        {
            institution: "adesso SE",
            references: [
                {
                    url: "https://adesso.de",
                    name: "Webseite",
                    icon: <GlobeIcon className="size-4"/>,
                }
            ],
            title: "Praktikant (Softwareentwickler)",
            logoSrc: "/adesso.png",
            start: "Apr. 2023",
            end: "Mai 2023",
            description:
                "Entwicklung einer Java-Webapp mit SpringBoot und Thymeleaf im Rahmen des Praktikums in der 9. Klasse.",
        },
    ],
}
