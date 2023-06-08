import { useLoaderData } from "react-router-dom";

const FruitCard = ({fruit}) => {
    console.log(fruit);
  return (
    <div class="fruit">
      <img src={fruit.imageUrl} alt="example1" />
      <h3 class="title">{fruit.name}</h3>
      <p class="description">{fruit.description}</p>
      <a class="details-btn" href="/dashboard/${fruit._id}">
        More Info
      </a>
    </div>
  );
};

function AllFruits(params) {
  const data = useLoaderData();
  const allFruits = data.results;

  const content =
    allFruits && allFruits.length > 0 ? (
      allFruits.map((fruit) => <FruitCard fruit={fruit} />)
    ) : (
      <p>No fruits yet</p>
    );

  return (
    <section>
      <h1>All Products</h1>
      {content}
    </section>
  );
}

export default AllFruits;
