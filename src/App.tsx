import { useState } from 'react'

import { cn } from './lib/utils.ts'

const App = () => {
  const [count, setCount] = useState(0)

  const hearderProps = {
    className: cn([
      `min-h-100vh`,
      `flex-(~ col)`,
      `items-center justify-center`,
      `bg-light dark:bg-black color-dark dark:color-light`,
    ]),
  } satisfies React.HTMLAttributes<HTMLElement>

  const buttonProps = {
    type: `button`,
    className: cn([
      `p-(y2 x-2)`,
      `bg-blue-400 dark:bg-blue-500`,
      `hover:(bg-blue-500 dark:bg-blue-600)`,
      `text-(sm dark)`,
      `font-(mono light)`,
      `border-(2 blue-200)`,
      `rounded`,
    ]),
    onClick: () => setCount(count => count + 1),
  } satisfies React.ButtonHTMLAttributes<HTMLButtonElement>

  const anchorProps = {
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `color-blue-500 dark:color-blue-400`,
  } satisfies React.AnchorHTMLAttributes<HTMLAnchorElement>

  return (
    <div className='text-center'>
      <header {...hearderProps}>
        <div className='w-100 flex justify-evenly'>
          <div className='i-logos-vitejs logo' />
          <div className='i-logos-react logo' />
          <div className='i-logos-unocss dark:i-logos-unocss?mask logo' />
        </div>
        <h1 mt='2em' animate='bounce-alt duration-2s'>
          Hello Vite + React + UnoCSS
        </h1>
        <p>
          <button {...buttonProps}>count is: {count}</button>
          <button {...buttonProps} ml='1em'>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a {...anchorProps} href='https://reactjs.org'>Learn React</a>
          {` | `}
          <a {...anchorProps} href='https://vitejs.dev/guide/features.html'>
            Vite Docs
          </a>
          {` | `}
          <a {...anchorProps} href='https://unocss.dev/guide'>UnoCSS Docs</a>
        </p>
      </header>
    </div>
  )
}

export default App
