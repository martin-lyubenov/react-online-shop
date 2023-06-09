import { Form, useLoaderData } from "react-router-dom";
import classes from "./CreateForm.module.css";

function CreateUpdateForm({ method }) {
  const fruit = useLoaderData();

  return (
    <section>
      <div className={classes.form}>
        <h2>Add Fruit</h2>
        <Form method={method}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
            defaultValue={fruit ? fruit.name : ""}
            required
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image"
            defaultValue={fruit ? fruit.imageUrl : ""}
            required
          />
          <textarea
            id="fruit-description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
            defaultValue={fruit ? fruit.description : ""}
            required
          />
          <textarea
            id="fruit-nutrition"
            name="nutrition"
            placeholder="Nutrition"
            rows="10"
            cols="50"
            defaultValue={fruit ? fruit.nutrition : ""}
            required
          />
          <button type="submit">Add Fruit</button>
        </Form>
      </div>
    </section>
  );
}

export default CreateUpdateForm;
