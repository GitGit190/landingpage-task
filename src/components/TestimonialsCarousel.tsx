import { A11y, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/pagination'
import { TestimonialCard } from './TestimonialCard'
import type { Review } from '../type/review'
import './TestimonialsCarousel.css'

export function TestimonialsCarousel({ reviews }: { reviews: Review[] }) {
  return (
    <Swiper
      modules={[A11y, Pagination]}
      a11y={{ containerRole: 'region', containerMessage: 'Client testimonials', paginationBulletMessage: 'Go to review {{index}}' }}
      slidesPerView={1}
      spaceBetween={8}
      breakpoints={{
        768: { slidesPerView: 1.5, centeredSlides: reviews.length >= 4, spaceBetween: 12 },
        1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 16 },
      }}
      loop={reviews.length >= 4}
      pagination={{ clickable: true, bulletElement: 'button' }}
      className="testimonials-swiper w-full"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <TestimonialCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
