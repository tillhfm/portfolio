import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merges Tailwind CSS class names, resolving conflicts via tailwind-merge
 * so later classes win (e.g. `p-2 p-4` → `p-4`). Accepts any value
 * accepted by clsx, including arrays and objects. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Builds a Google search URL for the given query string.
 * The query is percent-encoded so spaces and special characters are safe
 * in a href attribute.
 * @param query - The search term to look up.
 * @returns A fully-qualified `https://google.com/search?q=…` URL.
 */
export function googleSearchLink(query: string) {
  return `https://google.com/search?q=${encodeURIComponent(query)}`
}
