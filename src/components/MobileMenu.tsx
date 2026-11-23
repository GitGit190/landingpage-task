import { useEffect, useState } from 'react'
import { DropdownMenu } from 'radix-ui'

type MenuLink = { label: string; href: string }
const itemClassName = 'block rounded px-3 py-2 outline-none data-highlighted:bg-ice'

export function MobileMenu({ links, accountLinks }: { links: MenuLink[]; accountLinks: MenuLink[] }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const desktop = window.matchMedia('(min-width: 80rem)')
    const closeAtDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeAtDesktop)
    return () => desktop.removeEventListener('change', closeAtDesktop)
  }, [open])

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger aria-label="Open navigation menu" className="grid h-6 w-[42px] cursor-pointer content-between rounded-xs hover:text-gold focus-visible:outline-2">
        <span aria-hidden="true" className="h-0.5 bg-current" />
        <span aria-hidden="true" className="h-0.5 bg-current" />
        <span aria-hidden="true" className="h-0.5 bg-current" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={12} className="z-10 min-w-44 rounded-lg bg-white p-1.5 text-ink shadow-lg xl:hidden">
          {links.map(({ label, href }) => (
            <DropdownMenu.Item key={href} asChild>
              <a href={href} className={itemClassName}>{label}</a>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-1 h-px bg-ice lg:hidden" />
          <DropdownMenu.Group className="lg:hidden">
            {accountLinks.map(({ label, href }) => (
              <DropdownMenu.Item key={href} asChild>
                <a href={href} className={itemClassName}>{label}</a>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
