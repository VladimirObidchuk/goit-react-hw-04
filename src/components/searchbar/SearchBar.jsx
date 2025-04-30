import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (formData) => {
    const searchValue = formData.get("search");
    onSubmit(searchValue.trim());
  };
  return (
    <header className={css.header}>
      <form action={handleSubmit} className={css.form}>
        <button type="submit" className={css.btn}>
          <BsSearch />
        </button>
        <input
          type="text"
          name="search"
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
