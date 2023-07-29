/**
 * CSS color styles can be configured for light and dark themes
 * using CSS variables.
 *
 * The colors are based on the `shadcn/ui` website.
 *
 * Colors format: HSL (comma-separated legacy syntax).
 *
 * **NOTE**: UnoCSS **does not** support new hsl syntax. See issue #2703.
 *
 * ---
 * References:
 * - https://ui.shadcn.com/docs/installation/manual#configure-styles
 * - https://ui.shadcn.com/docs/theming
 * - https://tailwindcss.com/docs/customizing-colors#using-css-variables
 * - https://www.smashingmagazine.com/2021/07/hsl-colors-css
 * - https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
 * - https://github.com/unocss/unocss/issues/2703
 */
export const colors: string = /* CSS */ `
  :root {
    --background: 0, 0%, 100%;
    --foreground: 240, 10%, 3.9%;

    --muted: 240, 4.8%, 95.9%;
    --muted-foreground: 240, 3.8%, 46.1%;

    --popover: 0, 0%, 100%;
    --popover-foreground: 222.2, 47.4%, 11.2%;

    --border: 240, 5.9%, 90%;
    --input: 240, 5.9%, 90%;

    --card: 0, 0%, 100%;
    --card-foreground: 240, 10%, 3.9%;

    --primary: 240, 5.9%, 10%;
    --primary-foreground: 0, 0%, 98%;

    --secondary: 240, 4.8%, 95.9%;
    --secondary-foreground: 240, 5.9%, 10%;

    --accent: 240, 4.8%, 95.9%;
    --accent-foreground: 240, 5.9%, 10%;

    --destructive: 0, 84.2%, 60.2%;
    --destructive-foreground: 0, 0%, 98%;

    --ring: 240, 5%, 64.9%;

    --radius: 0.5rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: 240, 10%, 3.9%;
      --foreground: 0, 0%, 98%;

      --muted: 240, 3.7%, 15.9%;
      --muted-foreground: 240, 5%, 64.9%;

      --accent: 240, 3.7%, 15.9%;
      --accent-foreground: 0, 0%, 98%;

      --popover: 240, 10%, 3.9%;
      --popover-foreground: 0, 0%, 98%;

      --border: 240, 3.7%, 15.9%;
      --input: 240, 3.7%, 15.9%;

      --card: 240, 10%, 3.9%;
      --card-foreground: 0, 0%, 98%;

      --primary: 0, 0%, 98%;
      --primary-foreground: 240, 5.9%, 10%;

      --secondary: 240, 3.7%, 15.9%;
      --secondary-foreground: 0, 0%, 98%;

      --destructive: 0, 62.8%, 30.6%;
      --destructive-foreground: 0, 85.7%, 97.3%;

      --ring: 240 3.7% 15.9%;
    }
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
`
