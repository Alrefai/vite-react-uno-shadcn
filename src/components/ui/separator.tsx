'use client'
import { forwardRef } from 'react'

import { Root } from '@radix-ui/react-separator'

import { cn } from '@/lib/utils/css-classe-name.ts'

type SeparatorRef = React.ElementRef<typeof Root>
type SeparatorProps = React.ComponentPropsWithoutRef<typeof Root>

export const Separator = forwardRef<SeparatorRef, SeparatorProps>((
  { className, orientation = `horizontal`, decorative = true, ...props },
  ref,
) => {
  const separatorProps = {
    className: cn([
      `shrink-0 bg-border`,
      orientation === `horizontal` ? `h-1px w-full` : `h-full w-1px`,
      className,
    ]),
    orientation,
    decorative,
    ...props,
  } satisfies SeparatorProps

  return <Root {...{ ref, ...separatorProps }} />
})
