import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type GenreProps = {
  params: { id: string };
  searchParams: { genre: string };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: GenreProps) => {
  const movies = await getDiscoverMovies(id);

  return (
    <div className='max-w-7xl mx-auto'>
      {/* AI Azure suggestions */}

      <div className='flex flex-col space-y-5 mt-32 xl:mt-42'>
        <h1 className='text-[40px] sm:text-6xl font-bold px-10'>
          Results for {genre}
        </h1>
        <MoviesCarousel title={`Genre`} movies={movies} isVertical />
      </div>
    </div>
  );
};

export default GenrePage;
