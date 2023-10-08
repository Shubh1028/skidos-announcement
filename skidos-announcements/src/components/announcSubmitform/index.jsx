import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AppContext from "../../contextAPI/context";

/*It is a submit a announcement form  in which user can enter title description and category to submit a form.
I created this form with the help of Formik hich helps me in making forms in more cleaner and easier way with validations as well. When
user will hit submit button than I make an api call to make a post request for postion my data and than used that data to show on annoucements.*/

const AnnouncSubmitForm = () => {
  const { addData } = useContext(AppContext);
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    body: '',
    type: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Description is required'),
    type: Yup.string().required('Type is required'),
  });

  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  const makeApiCall = async (values) => {
    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataValue = await response.json();
        addData(dataValue);
        navigate('/');
      } catch (error) {
        console.error('Error:', error);
      }
  }

  const onSubmit = (values) => {
    makeApiCall(values)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form  className="login-form">
      <h2>Submit Your Announcement</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
            className="form-control"
          />
          <ErrorMessage name="title" component="div" className="error-message" />
        </div>
        <div className="form-group">
        <label htmlFor="body">Description</label>
            <Field
              as="textarea"
              id="body"
              name="body"
              rows="5" 
              cols="50"
              className="form-control"
            />
          <ErrorMessage name="body" component="div" className="error-message" />
        </div>
        <div className="form-group">
        <label htmlFor="type">Category</label>
            <Field as="select" id="selectField" name="type" className="form-control">
              <option value="">Select an option</option>
              <option value="announcement">Announcement</option>
              <option value="promotion">Promotion</option>
            </Field>
          <ErrorMessage name="type" component="div" className="error-message" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit An Announcement
        </button>
      </Form>
    </Formik>
  );
};

export default AnnouncSubmitForm;
