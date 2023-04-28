import { useDispatch } from 'react-redux';
import { signUp } from 'redux/operations';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Form from 'react-bootstrap/Form';
import { AuthLayout } from 'components/AuthLayout/AuthLayout';
import {
  FormContainer,
  StyledBtn,
  Label,
  Input,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const RegisterSchema = object().shape({
    name: string()
      .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, {
        message: 'Invalid name',
        excludeEmptyString: true,
      })
      .required('Required'),
    email: string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: 'Invalid email',
        excludeEmptyString: true,
      })
      .required('Required'),
    password: string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
        message:
          'Password should contain minimum seven characters, at least one letter and one number',
        excludeEmptyString: true,
      })
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: values => {
      dispatch(signUp(values));
    },
  });

  return (
    <AuthLayout layout={'register'}>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Label>
          Name
          <Input
            name="name"
            type="name"
            placeholder="John Dou"
            onChange={formik.handleChange}
            value={formik.values.name}
            isValid={formik.touched.name}
            isInvalid={formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Label>

        <Label>
          Email address
          <Input
            name="email"
            type="email"
            placeholder="mymail@mail.com"
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
          Sign Up
        </StyledBtn>
      </FormContainer>
    </AuthLayout>
  );
};

export default RegistrationPage;