import { useEffect } from 'react';
import './login.css';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const SignupForm = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.assign('/home');
    }
  }, []);

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <header className="login-image">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Yup.object({
                password: Yup.string().required('Requerido'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Requerido'),
              })}
              onSubmit={(values) => {
                axios
                  .post('http://challenge-react.alkemy.org', values)
                  .then((res) => {
                    console.log(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    window.location.assign('/');
                  })
                  .catch((err) => {
                    alert('Datos incorrectos');
                    console.log(err);
                  });
              }}
            >
              <Form className="login-form">
                <MyTextInput
                  className="login-form_input"
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="challenge@alkemy.org"
                />

                <MyTextInput
                  className="login-form_input"
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="react"
                />

                <button className="login-form_button" type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </header>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
