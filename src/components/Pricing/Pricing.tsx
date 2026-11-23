import { useCallback, useSyncExternalStore } from 'react'
import { A11y, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/pagination'
import { PricingCard } from './PricingCard'
import type { Billing } from '../../type/billing'
import './Pricing.css'

function subscribe(query: string, onChange: () => void) {
  const mediaQuery = window.matchMedia(query);

  mediaQuery.addEventListener("change", onChange);

  return () => {
    mediaQuery.removeEventListener("change", onChange);
  };
}

function useMediaQuery(query: string) { 
  const stableSubscribe = useCallback(
    (onChange: () => void) => subscribe(query, onChange),
    [query]
  );
  
  return useSyncExternalStore(
    stableSubscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export function Pricing({ billings }: { billings: Billing[] }) {
  const isBelowMd = useMediaQuery('(width < 48rem)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (!billings.length) return null

  if (isBelowMd) {
    return (
      <Swiper
        modules={[A11y, Pagination]}
        a11y={{ containerRole: "region", containerMessage: "Pricing plans", paginationBulletMessage: "Go to pricing plan {{index}}" }}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={16}
        speed={prefersReducedMotion ? 0 : 300}
        pagination={billings.length > 1 && { clickable: true, bulletElement: 'button' }}
        className="pricing-swiper w-full"
      >
        {billings.map((billing) => (
          <SwiperSlide key={billing.type}>
            <PricingCard billing={billing} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  return (
    <div
      role="region"
      aria-label="Pricing plans"
      tabIndex={0}
      className="flex w-full justify-center gap-10 overflow-x-auto overflow-y-hidden py-14 lg:gap-20"
    >
      {billings.map((billing) => (
        <PricingCard key={billing.type} billing={billing} />
      ))}
    </div>
  )
}
