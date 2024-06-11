import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookForm.module.css';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  email: Yup.string().email('Invalid email').required('Required!'),
  comment: Yup.string().max(100, 'Too long!'),
});

export default function BookForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const commentFieldId = useId();

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (values) => {
    values.date = startDate;
    console.log(values);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <strong className={css.title}>Book your campervan now</strong>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />

          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <ReactDatePicker
            className={css.field}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <Field
            className={`${css.field} ${css.textarea}`}
            type="text"
            name="comment"
            id={commentFieldId}
            placeholder="Comment"
            component="textarea"
            rows="3"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
