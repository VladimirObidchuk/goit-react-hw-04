import { useId } from "react";
import css from "./Formik.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too Short")
    .max(256, "Too Long!")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFildId = useId();
  const descId = useId();
  const selectId = useId();

  const handleSubmit = (value, actions) => {
    console.log(" value", value);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.blockinput}>
          <label htmlFor={nameFieldId}></label>
          <Field
            id={nameFieldId}
            className={css.item}
            type="text"
            name="username"
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.blockinput}>
          <label htmlFor={emailFildId}></label>
          <Field
            id={emailFildId}
            className={css.item}
            type="email"
            name="email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.blockinput}>
          <label htmlFor={descId}></label>
          <Field as="textarea" rows="5" id={descId} name="message" />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div className={css.blockinput}>
          <label htmlFor={selectId}></label>
          <Field as="select" id={selectId} name="level" className={css.select}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
        </div>
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default FeedbackForm;
