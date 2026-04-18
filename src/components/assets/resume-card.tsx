"use client";

import {Card, CardHeader} from "@/components/magicui/simpler-card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import {ChevronRightIcon} from "lucide-react";
import Link from "next/link";
import React from "react";
import {Button} from "../ui/button";

/**
 * Props for {@link ResumeCard}.
 * @property href - Navigation target. When `description` is provided, click is
 *   intercepted and the card expands instead of navigating.
 * @property description - When present, activates expand/collapse behaviour.
 * @property references - External links shown inside the expanded panel.
 * @property altText - Alt text for the logo; first character used as avatar fallback.
 */
interface ResumeCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
    references?: {
        url: string;
        name: string;
        icon: React.JSX.Element;
    }[];
}

/**
 * Work-experience card with an avatar logo on the left.
 * When `description` is provided, clicking prevents default navigation and instead
 * toggles an animated panel (Framer Motion height 0 → "auto") showing the description
 * and reference links. The chevron rotates 90° when expanded.
 * Reference buttons call `e.stopPropagation()` so clicking them doesn't collapse the card.
 */
export const ResumeCard = ({
                               logoUrl,
                               altText,
                               title,
                               subtitle,
                               href,
                               period,
                               description,
                               references,
                           }: ResumeCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const descriptionId = React.useId();

    const handleToggle = () => {
        if (description) setIsExpanded(prev => !prev);
    };

    const cardBody = (
        <Card className="flex w-full bg-transparent">
            <div className="flex-none">
                <Avatar className="border dark:border-white/20 size-10 m-auto bg-muted-background dark:bg-white">
                    <AvatarImage
                        src={logoUrl}
                        alt={altText}
                        className="object-contain"
                    />
                    <AvatarFallback>{altText[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-grow ml-4 items-center flex-col group w-full">
                <CardHeader className="w-full">
                    <div className="flex items-center justify-between gap-x-2 text-base w-full overflow-hidden">
                        <div className="flex items-center w-[48%] sm:w-[65%]">
                            <h3 className="flex items-center font-semibold leading-none text-xs sm:text-sm max-w-[90%]">
                           <span className="w-min max-w-[1000px] whitespace-nowrap overflow-hidden text-ellipsis">
                              {title}
                           </span>
                            </h3>
                            <ChevronRightIcon
                                className={cn(
                                    "flex-shrink-0 size-4 translate-x-0 transform opacity-100 transition-all duration-300 ease-out group-hover:translate-x-1",
                                    isExpanded ? "rotate-90" : "rotate-0"
                                )}
                            />
                        </div>
                        <div
                            className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right w-[50%] sm:w-[30%]">
                            {period}
                        </div>
                    </div>
                    {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
                </CardHeader>
                {description && (
                    <motion.div
                        id={descriptionId}
                        initial={{opacity: 0, height: 0}}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            height: isExpanded ? "auto" : 0,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        aria-hidden={!isExpanded}
                        className="mt-2 text-xs sm:text-sm flex flex-col max-w-full w-full"
                    >
                        {description}
                        <div className="flex gap-x-3 w-full flex-wrap">
                            {references?.map((ref) => (
                                <Button size="sm" key={ref.url} variant="link"
                                        className="mt-2 flex items-center space-x-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open(ref.url, '_blank', 'noopener,noreferrer');
                                        }}
                                >
                                    {ref.icon} <span>{ref.name}</span>
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </Card>
    );

    const sharedProps = {
        className: "block cursor-pointer w-full",
        ...(description && {"aria-expanded": isExpanded, "aria-controls": descriptionId}),
    };

    if (href) {
        return (
            <Link
                href={href}
                {...sharedProps}
                onClick={(e) => {
                    if (description) {
                        e.preventDefault();
                        setIsExpanded(prev => !prev);
                    }
                }}
            >
                {cardBody}
            </Link>
        );
    }

    return (
        <div
            role="button"
            tabIndex={0}
            {...sharedProps}
            onClick={handleToggle}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleToggle();
            }}
        >
            {cardBody}
        </div>
    );
};
