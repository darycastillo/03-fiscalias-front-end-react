import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { singIn } from '../store/actions/login.actions';
import { useUpdateEffect, useSessionStorage, useRouter } from '@hooks';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Almenos 8 caracteres')
    .required('Password is required'),
});

export const useLogin = () => {
  const { setValue: setSessionValue } = useSessionStorage('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector(({ SignInSide }) => SignInSide.Login);
  const [showPassword, setShowPassword] = useState(false);
  const {
    appRoutes: {
      main: [mainPage],
    },
  } = useRouter();
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
      dispatch(singIn(true, setSessionValue));
    },
  });

  useUpdateEffect(() => {
    login.isLoggedIn && navigate(mainPage, { replace: true });
  }, [login]);

  return {
    showPassword,
    setShowPassword,
    formik,
  };
};

export default useLogin;
