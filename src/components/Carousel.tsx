import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';

export type CarouselProps = {
  images: readonly string[];
};

export default function Carousel({ images }: CarouselProps) {
  if (images.length === 0) return null;

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView="auto"
      centeredSlides
      spaceBetween={20}
      loop={images.length > 2}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      navigation
      grabCursor
      className="gallery-swiper"
      aria-roledescription="carousel"
      role="region"
      aria-label="גלריית תמונות"
    >
      {images.map((src, i) => (
        <SwiperSlide key={src + i}>
          <div className="swiper-slide-inner">
            <img src={src} alt="" loading="lazy" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
