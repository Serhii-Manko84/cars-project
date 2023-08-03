import React, { useState } from "react";
import css from "./CreateCardForm.module.css";

const clerDataForm = { name: "", price: "", image: "" };

function CreateCardForm({ setCars }) {
  const [data, setData] = useState({ name: "", price: "", image: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data.name.trim() === "" ||
      data.price.trim() === "" ||
      data.image.trim() === ""
    ) {
      alert("Please fill in all the required fields");
      return;
    }
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(clerDataForm);
  };

  return (
    <form className={css.form}>
      <input
        className={css.input}
        placeholder="Name"
        value={data.name}
        onChange={(event) =>
          setData((prev) => ({ ...prev, name: event.target.value }))
        }
        required
      />
      <input
        className={css.input}
        placeholder="Price"
        value={data.price}
        onChange={(event) =>
          setData((prev) => ({ ...prev, price: event.target.value }))
        }
        required
      />
      <input
        className={css.input}
        placeholder="Image"
        value={data.image}
        onChange={(event) =>
          setData((prev) => ({ ...prev, image: event.target.value }))
        }
        required
      />

      <button className="btn" onClick={handleSubmit}>
        Create Car
      </button>
    </form>
  );
}

export default CreateCardForm;
