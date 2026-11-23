import { Quote } from "./Quote"
import type { Review } from '../type/review'

export function TestimonialCard({ review, color = 'white' }: { review: Review; color?: 'white' | 'navy' }) {
  return (
    <figure className={`flex w-full flex-col gap-10 rounded-[10px] ${color === 'white' ? 'bg-white' : 'bg-navy'} p-5 text-left shadow-[15px_10px_25px_rgb(0_0_0/0.1)]`}>
      <div className="flex gap-2">
        <Quote color={color === 'white' ? 'blue' : 'white'} />
        <Quote color={color === 'white' ? 'blue' : 'white'} />
      </div>
      <blockquote>{review.quote}</blockquote>
      <div className="mt-auto h-px w-full bg-black" />
      <figcaption className="flex flex-col gap-6">
        <div aria-hidden="true" className="size-[65px] bg-orange-500 rounded-full" data-artwork="client-avatar" />
        <div className="space-y-[15px]">
          <p className="font-bold leading-[22px]">{review.name}</p>
          <p>{review.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}
