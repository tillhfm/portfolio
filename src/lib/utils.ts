import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function googleSearchLink(query: string) {
   return "https://google.com/search?q=" + query.replace(" ", "+")
}