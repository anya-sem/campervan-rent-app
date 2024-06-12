import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';
import { Icon } from '../Icons/Icon';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

export default function BookForm() {
  const [dateValue, setDateValue] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarActive, setCalendarActive] = useState(false);

  const handleSubmit = (values) => {
    values.date = dateValue;
    console.log(values);
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarOpen && !event.target.closest(`.${css.dateWrapper}`)) {
        setCalendarOpen(false);
        setCalendarActive(!calendarActive);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [calendarOpen]);

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <strong className={css.title}>Book your campervan now</strong>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <ErrorMessage className={css.error} name="name" component="span" />

          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <div className={css.dateWrapper}>
            <ReactDatePicker
              className={css.field}
              wrapperClassName={css.datePickerWrapper}
              selected={dateValue}
              placeholderText="Booking date"
              dateFormat="dd/MM/yyyy"
              required
              disabled
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(date) => setDateValue(date)}
              open={calendarOpen}
            />
            <button
              className={`${css.calendarBtn} ${
                calendarActive ? css.active : ''
              }`}
              type="button"
              onClick={() => {
                setCalendarOpen(!calendarOpen);
                setCalendarActive(!calendarActive);
              }}
            >
              <Icon
                name="calendar"
                fill="none"
                stroke="currentColor"
                color={
                  calendarActive ? 'var(--color-red)' : 'var(--color-darkblue)'
                }
                width="20"
                height="20"
              />
            </button>
          </div>
          <ErrorMessage className={css.error} name="date" component="span" />

          <Field
            className={css.field}
            type="text"
            name="comment"
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
