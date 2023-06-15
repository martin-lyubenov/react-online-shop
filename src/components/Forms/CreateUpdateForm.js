import { Form, useLoaderData } from "react-router-dom";
import classes from "./CreateUpdateForm.module.css";

function CreateUpdateForm({ method }) {
  const product = useLoaderData();

  return (
    <section>
      <div className={classes.form}>
        <h2>{product ? "Edit" : "Add"} product</h2>
        <Form method={method}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
            defaultValue={product ? product.name : ""}
            required
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image"
            defaultValue={product ? product.imageUrl : ""}
            required
          />
          <input
            type="number"
            step={0.01}
            name="price"
            id="price"
            placeholder="price"
            defaultValue={product ? product.price : ""}
            required
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
            defaultValue={product ? product.description : ""}
            required
          />
          <button type="submit">{product ? "Edit" : "Add"} Fruit</button>
        </Form>
      </div>
    </section>
  );
}

export default CreateUpdateForm;
