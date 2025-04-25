import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  return (
    <div className={css.search}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css}
      />
      <p className={css}>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
