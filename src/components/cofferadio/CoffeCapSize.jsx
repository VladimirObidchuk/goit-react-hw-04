import css from "./CoffeCapSize.module.css";

const CoffeCapSize = ({ size, onSelect }) => {
  return (
    <div className={css.radioSize}>
      <h3 className={css.title}>Select coffe size</h3>
      <label className={css.itemSize}>
        <input
          type="radio"
          name="coffeSize"
          value="sm"
          className={css.radioLink}
          checked={size === "sm"}
          onChange={onSelect}
        />
        Small
      </label>
      <label className={css.itemSize}>
        <input
          type="radio"
          name="coffeSize"
          value="md"
          className={css.radioLink}
          checked={size === "md"}
          onChange={onSelect}
        />
        Medium
      </label>
      <label className={css.itemSize}>
        <input
          type="radio"
          name="coffeSize"
          value="lg"
          className={css.radioLink}
          checked={size === "lg"}
          onChange={onSelect}
        />
        Large
      </label>
    </div>
  );
};
export default CoffeCapSize;
