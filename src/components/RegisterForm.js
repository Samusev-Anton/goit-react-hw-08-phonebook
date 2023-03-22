import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations/userOperations';
import { ClassicFormStyle, ClassicButton } from 'components/GlobalStyles';
import { UserNameField } from 'components/FormFields/UserNameField';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'components/services/toasts';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Assignment from '@mui/icons-material/Assignment';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      return toastWarnEmptyField();
    }
    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <ClassicFormStyle onSubmit={handleSubmit} autoComplete="on">
      <UserNameField />
      <EmailField />
      <PasswordField />
      <ClassicButton type="submit" to={'/login'}>
        Register
        <Assignment sx={{ marginLeft: '5px' }} />
      </ClassicButton>
    </ClassicFormStyle>
  );
};
