import { useState } from 'react' 
import axios from 'axios'
import './inputsearch.css'
import { Formik, Form, useField } from 'formik'
import { Button, Spinner } from 'react-bootstrap'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {

    const [ field ] = useField(props);
    const [ spinner, setSpinner ] = useState(false)
    return (
        <>
          <label className="form__label" htmlFor={props.id || props.name}>{label}</label>
          <input  {...field} {...props} />
        </>
      );
}

const InputSearch = ({ searchResponse }) => { 
    return (
        <Formik
            initialValues={{
            hero: '',
            }}
            validationSchema={Yup.object({
            hero: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required')
            })}
            onSubmit={async values => {
                try {
                const heroresponse = await axios.get(`/4298272713525886/search/${values.hero}`)
                searchResponse(heroresponse.data);
                }
                catch (error){
                    console.log("error", error.message);
                }
            }}
        >
        {
            <Form className="form__formik">
            <MyTextInput
                className="form__input"
                label="hero"
                name="hero"
                type="text"
                placeholder="Busque su héroe"
            />

            <Button className="form__button" type="submit">
                {/* <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    /> */}
                <span>Submit</span></Button>
            </Form>
        }
        </Formik>)
}

export default InputSearch; 