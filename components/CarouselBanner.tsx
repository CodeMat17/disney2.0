"use client";

import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

Autoplay.globalOptions = { delay: 8000 };

type Props = {
  movies: Movie[];
};

const CarouselBanner = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className='overflow-hidden lg:-mt-48 relative cursor-pointer'
      ref={emblaRef}>
      <div className='flex'>
        {movies.map((movie) => (
          <div key={movie.id} className='flex-[0_0_100%] min-w-0 relative'>
            <Image
              key={movie.id}
              alt=''
              priority
              width={1920}
              height={1080}
              src={getImagePath(movie.backdrop_path, true)}
            />
            <div className='hidde lg:inline absolute top-0 left-0 z-20 pt-32 lg:pt-40 xl:pt-52 mt-0 lg:mt-40 h-full w-full bg-transparent bg-gradient-to-r from-gray-900 via-transparent to-transparent p-10 md:space-y-5 max-w-xl text-white'>
              <h2 className=' text-xl sm:text-3xl lg:text-5xl font-bold z-50'>
                {movie.title}
              </h2>
              <div className="hidden sm:block">
                 <p className='line-clamp-3'>{movie.overview}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-700 dark:to-[#1A1C29]' />
    </div>
  );
};

export default CarouselBanner;
