
import { Link } from 'react-router-dom';
import classes from './FruitCard.module.css'


function FruitCard({ fruit }) {


  return (
    <div className={classes.fruit}>
      <img src={fruit.imageUrl} alt="example1" />

      <h3 className={classes.title}>{fruit.name}</h3>
      <p class="description">{fruit.description}</p>
      <p class="price">{fruit.price}</p>
      <Link
        className={classes["details-btn"]}
        to={`/all-fruits/${fruit.objectId}`}
      >
        More Info
      </Link>
    </div>
  );
}

export default FruitCard;
