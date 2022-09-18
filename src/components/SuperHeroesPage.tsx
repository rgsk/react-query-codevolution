import axios from "axios";
import { useEffect, useState } from "react";
import { TSuperHero } from "../types/generalTypes";
interface ISuperHeroesPageProps {}
const SuperHeroesPage: React.FC<ISuperHeroesPageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TSuperHero[]>([]);
  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>SuperHeroesPage</h2>
      {data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
};
export default SuperHeroesPage;
