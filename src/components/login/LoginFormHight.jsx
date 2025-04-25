import css from "./LoginFormHight.module.css";

const LoginFormHight = ({ valueFild, handleChange, onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input
        type="text"
        name="login"
        value={valueFild.login}
        onChange={handleChange}
        className={css.input}
        autoComplete="username"
      />
      <input
        type="password"
        name="password"
        value={valueFild.password}
        onChange={handleChange}
        className={css.input}
        autoComplete="current-password"
      />
      <button type="submit" className={css.btn}>
        Login
      </button>
    </form>
  );
};
export default LoginFormHight;
