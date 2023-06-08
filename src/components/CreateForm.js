import { Form } from "react-router-dom";
import classes from "./CreateForm.module.css";

function CreateForm(params) {
  return (
    <section>
      <div className={classes.form}>
        <h2>Add Fruit</h2>
        <Form method="POST">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
            required
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image"
            required
          />
          <textarea
            id="fruit-description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
            required
          />
          <textarea
            id="fruit-nutrition"
            name="nutrition"
            placeholder="Nutrition"
            rows="10"
            cols="50"
            required
          />
          <button type="submit">Add Fruit</button>
        </Form>
      </div>
    </section>
  );
}

export default CreateForm;
