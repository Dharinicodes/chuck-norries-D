import { useEffect, useState } from "react";
import { CATEGORIES_URL } from "../utils/constants";
import CategoryCard from "./CategoryCard";

const JokeCategories = () => {
  const [listOfJokeCategories, setListOfJokeCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CATEGORIES_URL);

    const json = await data.json();

    console.log(json.data);

    setListOfJokeCategories(json);
  };

  return (
    <div className="categories-container">
      {listOfJokeCategories.map((category) => (
        <CategoryCard key={category} categoryData={category} />
      ))}
    </div>
  );
};

export default JokeCategories;
