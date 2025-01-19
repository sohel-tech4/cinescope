import { MovieCard } from "@/components/MovieCard/MovieCard";
import { useGetMoviesQuery } from "@/redux/api/api";
import { TMovie } from "@/types";

export default function Movies() {
  const { data, isLoading } = useGetMoviesQuery({});
  console.log(data);
  if (isLoading) {
    return (
      <p className="text-yellow-500 md:my-40 flex justify-center items-center text-4xl">
        Loading....
      </p>

    );
  }
  const movies = data?.data || [];
  return (
    <div className="container mx-auto">
      <h1 className="flex items-center justify-center text-2xl font-bold my-10">
        All Movies
      </h1>
      <div className="grid md:grid-cols-4 md:gap-4 gap-2">
        {movies.map((movie: TMovie) => (
          <MovieCard movie={movie} key={movie?._id} />
        ))}
      </div>
    </div>
  );
}
