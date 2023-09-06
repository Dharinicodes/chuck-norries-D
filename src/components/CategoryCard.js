const CategoryCard = (props) => {
  const { categoryData } = props;

  const handleClick = async (categoryData) => {
    const data = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoryData}`
    );

    const json = await data.json();

    console.log(json);
  };

  return (
    <div className="category-card" onClick={() => handleClick(categoryData)}>
      <h1> {categoryData} </h1>
      <h5>Unlimited Jokes on {categoryData} </h5>
    </div>
  );
};

export default CategoryCard;
