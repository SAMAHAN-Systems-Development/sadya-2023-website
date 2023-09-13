import { cx } from 'class-variance-authority';
import { ClassValue } from 'class-variance-authority/types';
import { twMerge } from 'tailwind-merge';

/**
 * This utility function merges and avoids styling conflicts in TailwindCSS.
 *
 * @param inputs List of ClassValue
 * @returns string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}
