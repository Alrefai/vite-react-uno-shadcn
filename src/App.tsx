import { useState } from 'react'

import { Button } from '@/components/ui/button.tsx'
import type { ButtonProps } from '@/components/ui/button.tsx'

const App = () => {
  const [count, setCount] = useState(0)

  const hearderProps = {
    className: `min-h-100vh flex-(~ col) items-center justify-center`,
  } satisfies React.HTMLAttributes<HTMLElement>

  const buttonProps = {
    type: `button`,
    className: `font-(mono light) m-2 active:scale-99`,
    onClick: () => setCount(count => count + 1),
  } satisfies ButtonProps

  const anchorProps = {
    target: `_blank`,
    rel: `noopener noreferrer`,
  } satisfies React.AnchorHTMLAttributes<HTMLAnchorElement>

  return (
    <div className='text-center'>
      <header {...hearderProps}>
        <div className='w-100 py-8 flex justify-evenly'>
          <div className='i-logos-vitejs logo' />
          <div className='i-logos-react logo' />
          <div className='i-logos-unocss?mask logo bg-foreground/80' />
        </div>
        <h1 pt='4' animate='bounce duration-2s'>
          Hello Vite + React + UnoCSS
        </h1>
        <p py='4'>
          <Button {...buttonProps} focus-visible='dark:ring-primary/30'>
            count is: {count}
          </Button>
          <Button {...buttonProps} variant='secondary'>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Button asChild variant='link' text='muted-foreground'>
            <a {...anchorProps} href='https://vitejs.dev/guide/features.html'>
              Vite Docs
            </a>
          </Button>
          {`|`}
          <Button asChild variant='link' text='muted-foreground'>
            <a {...anchorProps} href='https://reactjs.org'>Learn React</a>
          </Button>
          {`|`}
          <Button asChild variant='link' text='muted-foreground'>
            <a {...anchorProps} href='https://unocss.dev/guide'>UnoCSS Docs</a>
          </Button>
        </p>
      </header>
    </div>
  )
}

export default App
