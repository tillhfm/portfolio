"use client";

import { Card, CardHeader } from "@/components/magicui/simpler-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { DATA } from "@/data/data";

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
export const ResumeCard = ({
   logoUrl,
   altText,
   title,
   subtitle,
   href,
   badges,
   period,
   description,
   references,
}: ResumeCardProps) => {
   const [isExpanded, setIsExpanded] = React.useState(false);

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (description) {
         e.preventDefault();
         setIsExpanded(!isExpanded);
      }
   };

   return (
      <Link
         href={href || "#"}
         className="block cursor-pointer"
         onClick={handleClick}
      >
         <Card className="flex">
            <div className="flex-none">
               <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
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
                     <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right w-[50%] sm:w-[30%]">
                        {period}
                     </div>
                  </div>
                  {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
               </CardHeader>
               {description && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: isExpanded ? 1 : 0,

                        height: isExpanded ? "auto" : 0,
                     }}
                     transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                     }}
                     className="mt-2 text-xs sm:text-sm flex flex-col"
                  >
                     {description}
                     <div className="flex space-x-3">
                        {references && references.map((ref, x) => (
                           <Button size="sm" key={x} variant="link" asChild className="mt-2" onClick={(e) => e.stopPropagation()}>
                              <Link href={ref.url} target="_blank" className="flex w-fit items-center space-x-1">
                                 {ref.icon} <span>{ref.name}</span>
                              </Link>
                           </Button>
                        ))}
                     </div>
                  </motion.div>
               )}
            </div>
         </Card>
      </Link>
   );
};
