import { useState } from 'react'

import { cn } from './lib/utils.ts'

const App = () => {
  const [count, setCount] = useState(0)

  const hearderProps = {
    className: cn([
      `min-h-100vh`,
      `flex-(~ col)`,
      `items-center justify-center`,
      `bg-#282c34 color-white`,
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
    className: `color-#61dafb`,
  } satisfies React.AnchorHTMLAttributes<HTMLAnchorElement>

  return (
    <div className='text-center'>
      <header {...hearderProps}>
        <div className='logo' />
        <h1 mt='2em' animate='bounce-alt duration-2s'>
          Hello Vite + React!
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
        </p>
      </header>
    </div>
  )
}

export default App
