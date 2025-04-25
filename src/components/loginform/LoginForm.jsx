import { useId } from "react";
import css from "./Loginform.module.css";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const paswordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={loginId}>Login</label>
      <input
        className={css}
        type="text"
        name="login"
        id={loginId}
        autoComplete="username"
      />
      <label htmlFor={paswordId}>Password</label>
      <input
        className={css}
        type="password"
        name="password"
        id={paswordId}
        autoComplete="current-password"
      />
      <button className={css.formBtn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
