import axios from 'axios';
import { Formik, Form, useField } from 'formik'
import { Button } from 'react-bootstrap';
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <input  {...field} {...props} />
          {meta.touched && meta.error ? (
            <div >{meta.error}</div>
          ) : null}
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
            onSubmit={async (values) => {
                try {
                const heroresponse = await axios.get(`https://superheroapi.com/api/4298272713525886/search/${values.hero}`)
                searchResponse(heroresponse.data);
            }
                catch (error){
                    console.log("error", error.message);
                }
            }}

        >
        {( { isSubmitting }) => (
            <Form >
            <MyTextInput
                label="hero"
                name="hero"
                type="text"
                placeholder="Busque su héroe"
            />

            <Button type="submit" disable={isSubmitting}>Submit</Button>
            </Form>
        )}
        </Formik>)
}

export default InputSearch; 