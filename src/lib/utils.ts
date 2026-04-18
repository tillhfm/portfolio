import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function googleSearchLink(term: string) {
    return `https://www.google.com/search?q=${encodeURIComponent(term)}`
}
