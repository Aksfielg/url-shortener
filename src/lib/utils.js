import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getShortBase = () => {
  try {
    // Prefer a Vite env var for explicit base URL in production
    if (import.meta && import.meta.env && import.meta.env.VITE_BASE_URL) {
      return import.meta.env.VITE_BASE_URL.replace(/\/$/, "");
    }
  } catch (e) {}

  // Fallback to current origin (good for local testing)
  if (typeof window !== "undefined" && window.location && window.location.origin) {
    return window.location.origin;
  }

  // final fallback
  return "https://trimrr.in";
};
