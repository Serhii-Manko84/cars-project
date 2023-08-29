import React from "react";
import { useForm } from "react-hook-form";
import css from "./CreateCardForm.module.css";

function CreateCardForm({ setCars }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const handleSubmitCar = (data) => {
    console.log(data);

    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);

    reset();
    return;
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(handleSubmitCar)}>
      <input
        className={css.input}
        {...register("name", { required: "message" })}
        placeholder="Name"
      />
      {errors?.name?.message && (
        <p style={{ color: "red" }}>Name is required!</p>
      )}
      <input
        className={css.input}
        {...register("price", { required: "message" })}
        placeholder="Price"
      />
      {errors?.name?.message && (
        <p style={{ color: "red" }}>Price is required!</p>
      )}
      <input
        className={css.input}
        {...register("image", { required: "message" })}
        placeholder="Image"
      />
      {errors?.name?.message && (
        <p style={{ color: "red" }}>Image is required!</p>
      )}

      <button className="btn">Create Car</button>
    </form>
  );
}

export default CreateCardForm;
