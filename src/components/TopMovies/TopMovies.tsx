import { useGetMoviesQuery } from "@/redux/api/api";
import { MovieCard } from "../MovieCard/MovieCard";
import { TMovie } from "@/types";

const TopMovies = () => {
  const { data, isLoading } = useGetMoviesQuery({});
  console.log(data);
  if (isLoading) {
    return (
      <p className="text-yellow-500 flex justify-center items-center text-4xl">
        Loading....
      </p>
    );
  }
  const movies = data?.data || [];
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-yellow-400">What to watch</h1>
      <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1">
        Top Rated Movies
      </h2>
      <div className="grid md:grid-cols-4 md:gap-4 gap-2">
        {movies.slice(0, 4).map((movie: TMovie) => (
          <MovieCard movie={movie} key={movie?._id} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
