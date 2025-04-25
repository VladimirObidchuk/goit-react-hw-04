import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <button type="submit" className={css.btn}>
          <BsSearch />
        </button>
        <input
          type="text"
          className={css.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
