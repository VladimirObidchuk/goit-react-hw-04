import { useId } from "react";
import css from "./LangSwitcher.module.css";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div className={css.switcher}>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        className={css.select}
        value={value}
        onChange={(evt) => {
          onSelect(evt.target.value);
        }}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
