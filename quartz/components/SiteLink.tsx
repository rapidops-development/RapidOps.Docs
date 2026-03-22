import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  label: string
  href: string
}

function SiteLink(_props: QuartzComponentProps, opts: Options) {
  return (
    <a href={opts.href} class="site-link" target="_blank" rel="noopener noreferrer">
      {opts.label}
    </a>
  )
}

SiteLink.css = `
.site-link {
  display: block;
  text-align: center;
  border: 1px solid var(--lightgray);
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--secondary) !important;
  background-color: transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
  text-decoration: none !important;
  background-color: transparent !important;
}

.site-link:hover {
  border-color: var(--secondary);
  color: var(--tertiary) !important;
}
`

export default ((opts: Options) =>
  (props: QuartzComponentProps) =>
    SiteLink(props, opts)) satisfies QuartzComponentConstructor
