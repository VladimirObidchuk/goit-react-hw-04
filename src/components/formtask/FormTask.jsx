import css from "./FormTask.module.css";

const FormTask = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <input type="text" className={css} name="text" />
      <button type="submit">Add task</button>
    </form>
  );
};
export default FormTask;
