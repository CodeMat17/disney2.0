import { cn } from "@/lib/utils";
import { Movie } from "@/typings";
import MovieCard from "./MovieCard";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MoviesCarousel = ({ title, movies, isVertical }: Props) => {
  return (
    <div className='z-40'>
      <h2 className='text-xl font-bold px-10 py-2'>{title}</h2>
      <div
        className={cn(
          "flex gap-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
          isVertical && "flex-col space-x-0 space-y-12"
        )}>
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical && "flex flex-col gap-5 items-center lg:flex-row"
                )}>
                <MovieCard movie={movie} />
                <div className='max-w-2xl'>
                  <p className='font-bold'>
                    {movie.title} ({movie.release_date?.split("_")[0]})
                </p>
                <p>{ movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MoviesCarousel;
