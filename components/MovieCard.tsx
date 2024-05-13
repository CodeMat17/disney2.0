import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className='relative flex-shrink-0 cursor-pointer transform transition hover:scale-110 duration-200 ease-out hover:drop-shadow-lg rounded-xl overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-white dark:to-[#1a1c29] z-10' />
      <p className='absolute z-20 bottom-5 left-5'>{movie.title}</p>
      <Image
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        className='w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray rounded-lg drop-shadow-'
      />
    </div>
  );
};

export default MovieCard;
