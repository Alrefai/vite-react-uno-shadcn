import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ClassValue } from 'clsx'

/**
 * Merges Tailwind CSS classes conditionally without style conflicts.
 *
 * @param {readonly ClassValue[]} inputs
 * The list of Tailwind CSS classes to merge.
 *
 * @returns {string} The merged Tailwind CSS classes.
 *
 * ---
 * References:
 * - https://ui.shadcn.com/docs/installation/manual#add-a-cn-helper
 * - https://github.com/lukeed/clsx
 * - https://github.com/dcastil/tailwind-merge
 */
export const cn = (inputs: readonly ClassValue[]): string =>
  twMerge(clsx(inputs))
