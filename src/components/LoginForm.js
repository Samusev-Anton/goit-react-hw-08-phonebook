import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUser } from 'redux/operations/userOperations';
import { ClassicFormStyle, ClassicButton } from 'components/GlobalStyles';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import { Modal } from 'components/Modal/Modal';
import { ChangePasswordForm } from 'components/ChangePasswordForm/ChangePasswordForm';
import { toastWarnEmptyField } from 'components/services/toasts';
import InputIcon from '@mui/icons-material/Input';

export const LoginForm = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const dispatch = useDispatch();

  const handleSubmitLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      return toastWarnEmptyField();
    }

    dispatch(
      logInUser({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <ClassicFormStyle onSubmit={handleSubmitLogIn} autoComplete="on">
      <EmailField />
      <PasswordField />
      <ClassicButton
        type="submit"
        disabled={modal}
        style={{ marginBottom: '15px' }}
      >
        Log In
        <InputIcon sx={{ marginLeft: '5px' }} />
      </ClassicButton>
      <ClassicButton
        type="button"
        onClick={() => setModal(true)}
        disabled={modal}
      >
        Forgot password?
      </ClassicButton>
      <Modal isOpened={modal} isCloseModal={closeModal}>
        <ChangePasswordForm isCloseModal={closeModal} />
      </Modal>
    </ClassicFormStyle>
  );
};
