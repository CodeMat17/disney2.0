import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

const Home = async () => {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <div>
      {/* Carousel banner wrapper */}
      <CarouselBannerWrapper />

      <div className='flex flex-col space-y-2 -mt-[40px] sm:-mt-[100px] md:-mt-[120px] xl:-mt-48'>
        <MoviesCarousel movies={upcomingMovies} title='Upcoming' />
        <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
        <MoviesCarousel movies={popularMovies} title='Popular' />
      </div>
    </div>
  );
};

export default Home;
