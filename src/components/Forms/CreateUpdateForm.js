import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import classes from "./CreateUpdateForm.module.css";

function CreateUpdateForm({ method }) {
  const product = useLoaderData();
  const navigate = useNavigate();

  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function onCancelHandler(params) {
    navigate("..");
  }

  return (
    <section>
      <div className={classes.form}>
        <h2>{product ? "Edit" : "Add"} product</h2>
        <Form method={method}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            defaultValue={product ? product.name : ""}
            required
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Product Image"
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
          <select id="shipping" name="shipping">
            <option value="Free shipping">Free shipping</option>
            <option value="Paid shipping">Paid shipping</option>
          </select>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
            defaultValue={product ? product.description : ""}
            required
          />
          <button disabled={isSubmitting} type="submit">
            {" "}
            {isSubmitting
              ? "Processing"
              : product
              ? "Edit Product"
              : "Add Product"}
          </button>
          {product && (
            <button onClick={onCancelHandler} type="button">
              Cancel
            </button>
          )}
        </Form>
      </div>
    </section>
  );
}

export default CreateUpdateForm;
