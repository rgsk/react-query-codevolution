import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TSuperHero } from "../types/generalTypes";
interface IRQSuperHeroesPageProps {}
const RQSuperHeroesPage: React.FC<IRQSuperHeroesPageProps> = ({}) => {
  const superheroesQuery = useQuery(["superheroes"], () =>
    axios.get<TSuperHero[]>("http://localhost:4000/superheroes")
  );
  if (superheroesQuery.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>SuperHeroesPage</h2>
      {superheroesQuery.data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
};
export default RQSuperHeroesPage;
