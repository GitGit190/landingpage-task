import chevronDown from '../assets/chevron-down.svg'
import { MobileMenu } from './MobileMenu'

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
]

const signIn = { label: 'Sign in', href: '/sign-in' }
const trial = { label: 'Try Whitepace for free', href: '#try-whitepace' }

export function HeaderNavigation() {
  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 xl:flex">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-xs text-base font-medium hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {label}
            <img src={chevronDown} width="10" height="5" alt="" />
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-6 lg:flex">
        <a href={signIn.href} className="action bg-gold px-6 py-3 text-base leading-6 text-navy hover:bg-gold/90">
          {signIn.label}
        </a>
        <a href={trial.href} className="action px-5 py-3 text-base leading-6">
          {trial.label}<span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="xl:hidden">
        <MobileMenu links={links} accountLinks={[signIn, trial]} />
      </div>
    </div>
  )
}
