import DataMovies from "./mocks/with-results.json";
export const searchMovies = ({ search }) => {
  try {
    const res = DataMovies.Search;
    // const data = res.filter((el) => search === el.Year);
    console.log(res);
    return res;
  } catch {
    throw new Error("Error searching movies");
  }
};
