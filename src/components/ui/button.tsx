import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils/css-classe-name.ts'
import { tl } from '@/lib/utils/to-single-line.ts'

const buttonVariants = cva(
  tl`
    inline-flex
    items-center
    justify-center
    rounded-md
    text-sm
    font-medium
    transition-colors
    focus-visible:(outline-none ring-1 ring-ring)
    disabled:(pointer-events-none opacity-50)
  `,
  {
    variants: {
      variant: {
        default: tl`
          bg-primary
          text-primary-foreground
          shadow
          hover:bg-primary/90
        `,
        destructive: tl`
          bg-destructive
          text-destructive-foreground
          shadow-sm
          hover:bg-destructive/90
        `,
        outline: tl`
          border
          border-input
          bg-background
          shadow-sm
          hover:(bg-accent text-accent-foreground)
        `,
        secondary: tl`
          bg-secondary
          text-secondary-foreground
          shadow-sm
          hover:bg-secondary/80
        `,
        ghost: `hover:(bg-accent text-accent-foreground)`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: `h-9 p-(x4 y2)`,
        sm: `h-8 rounded-md px-3 text-xs`,
        lg: `h-10 rounded-md px-8`,
        icon: `h-9 w-9`,
      },
    },
    defaultVariants: { variant: `default`, size: `default` },
  } as const,
)

export type ButtonProps = Readonly<
  & { asChild?: boolean }
  & VariantProps<typeof buttonVariants>
  & ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : `button`
    const classVariant = cn([buttonVariants({ variant, size, className })])
    return <Component {...{ className: classVariant, ref, ...props }} />
  },
)
