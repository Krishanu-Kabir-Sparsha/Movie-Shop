import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css';
import AvatarSlider from "../assets/Avatar_movie-desktop-Wallpaper.jpg";
import Batman from '../assets/Batman-Wallpaper-HD.jpg';
import Ironman from "../assets/iron-man.jpg";
import Spiderman from "../assets/spiderman.jpg"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';


export default function MovieSlider() {
  return (
    <section className='container mx-auto my-auto'>
        <Swiper
        effect='cube'
        modules={[Navigation, Pagination, EffectCube, Autoplay]}
        navigation
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide   change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='w-full h-[600px] object-center object-cover' src={AvatarSlider} alt="avatar slider" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-full h-[600px] object-center object-cover' src={Batman} alt="batman slider" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-full h-[600px] object-center object-cover' src={Ironman} alt="ironman slider" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-full h-[600px] object-center object-cover' src={Spiderman} alt="spiderman slider" />
      </SwiperSlide>
      ...
    </Swiper>
    </section>
  )
}
