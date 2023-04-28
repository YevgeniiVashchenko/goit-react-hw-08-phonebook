import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Form from 'react-bootstrap/Form';
import { AuthLayout } from 'components/AuthLayout/AuthLayout';
import { FormContainer, StyledBtn, Label, Input } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const LoginSchema = object().shape({
    email: string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: 'Invalid email',
        excludeEmptyString: true,
      })
      .required('Required'),
    password: string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  return (
    <AuthLayout>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Label>
          Email address
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
            isValid={formik.touched.email}
            isInvalid={formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Label>

        <Label>
          Password
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isValid={formik.touched.password}
            isInvalid={formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Label>
        <StyledBtn variant="dark" type="submit">
          Log In
        </StyledBtn>
      </FormContainer>
    </AuthLayout>
  );
};

export default LoginPage;
