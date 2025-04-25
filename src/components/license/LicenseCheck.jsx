import css from "./LicenseCheck.module.css";

const LicenseCheck = ({ check, onChecked }) => {
  return (
    <div className={css.licenseBlock}>
      <label className={css.blockCheckt}>
        <input
          type="checkbox"
          name="terms"
          className={css.checket}
          checked={check}
          onChange={onChecked}
        />
        I accept terms and conditions
      </label>
      <button type="button" className={css.btn} disabled={!check}>
        Process
      </button>
    </div>
  );
};
export default LicenseCheck;
