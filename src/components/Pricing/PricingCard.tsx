import { Button } from '../Button'
import type { Billing } from '../../type/billing'

export function PricingCard({ billing }: { billing: Billing }) {
  return (
    <div className="group flex min-w-0 flex-1 flex-col justify-between gap-8 rounded-[10px] border border-gold bg-white px-5 py-10 text-left text-black shadow-[0_4px_25px_rgb(0_0_0/0.08)] hover:bg-navy hover:border-0 hover:text-white motion-safe:transition-[scale] motion-safe:duration-150 motion-safe:ease-out sm:px-8 sm:py-14 md:w-[20vw] md:max-w-[400px] md:min-w-[250px] md:flex-none md:gap-18 md:px-11 md:py-20 md:hover:scale-110">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl leading-9 font-semibold">{billing.type}</h2>
        <p className="font-bold text-[36px] group-hover:text-gold text-black">${billing.price}</p>
        <p className="leading-5 font-light">{billing.description}</p>
      </div>
      <ul className="space-y-7 text-base leading-5 tracking-[-0.32px]">
        {billing.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-[19px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 stroke-black group-hover:stroke-gold"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19.0059 9.17981V10.0081C19.0047 11.9495 18.3761 13.8385 17.2137 15.3935C16.0512 16.9484 14.4173 18.0859 12.5556 18.6364C10.6938 19.1869 8.70404 19.1208 6.88294 18.4479C5.06183 17.7751 3.507 16.5317 2.45034 14.903C1.39367 13.2744 0.891777 11.3478 1.01952 9.41057C1.14725 7.47336 1.89778 5.62935 3.15915 4.15354C4.42053 2.67773 6.12517 1.64921 8.01885 1.22135C9.91253 0.793503 11.8938 0.989251 13.6671 1.77941" />
              <path d="M19.0059 2.80566L10.0029 11.8176L7.30206 9.11672" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
      <Button className="py-4 border group-hover:border-0 border-gold bg-white group-hover:bg-sky text-black group-hover:text-white">Get Started</Button>
    </div>
  )
}
