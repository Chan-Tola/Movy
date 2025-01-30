import Card from "./Card";
import DataCards from "./Data/DataCards";
const MovieCategory = () => {
  return (
    <>
      {DataCards.map((categoryData, index) => {
        return (
          <Card
            key={index}
            category={categoryData.category}
            movies={categoryData.movies}
          />
        );
      })}
    </>
  );
};
export default MovieCategory;
