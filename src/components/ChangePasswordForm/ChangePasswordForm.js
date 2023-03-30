import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from 'redux/operations/userOperations';
import { EmailField } from 'components/FormFields/EmailField';
import { SendMailPassword } from 'redux/operations/userOperations';
import { tempPassword } from 'redux/selector';

import {
  ClassicFormStyle,
  ClassicLabelForm,
  ClassicInputForm,
  ClassicButton,
} from 'components/GlobalStyles';

import {
  VisibilityIconStyle,
  VisibilityOffIconStyle,
  ButtonForVisibility,
  KeyIconStyle,
  TempPasswordIcon,
} from '../icons/icons.styled';

import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export const ChangePasswordForm = ({ isCloseModal }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [temporaryPassword, setTempPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [doublePassword, setDoublePassword] = useState('');
  const [email, setEmail] = useState('');

  const temp = useSelector(tempPassword);
  const activateChangePassword = temp === temporaryPassword;
  const activeSubmitPassword = newPassword === doublePassword;

  const handleSubmitSendEmail = e => {
    e.preventDefault();
    e.stopPropagation();

    const email = e.currentTarget.elements.email.value;
    setEmail(email);
    dispatch(SendMailPassword(email));
  };

  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    console.log(form);
    const newPassword = {
      email,
      password: doublePassword,
    };

    dispatch(changePassword(newPassword));
    form.reset();
  };

  return (
    <>
      <ClassicFormStyle onSubmit={handleSubmitSendEmail} autoComplete="on">
        <EmailField />
        {email === '' ? (
          <ClassicButton type="submit">
            SendEmail
            {/* <InputIcon sx={{ marginLeft: '5px' }} /> */}
          </ClassicButton>
        ) : (
          <p>On your email adress was sent the letter with password</p>
        )}
      </ClassicFormStyle>

      <ClassicFormStyle onSubmit={onSubmitForm}>
        <ClassicLabelForm style={{ color: 'black' }}>
          Temporary password
          <ClassicInputForm
            onChange={e => setTempPassword(e.currentTarget.value)}
            type="text"
            name="temporaryPassword"
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Insert the password received by email"
            required
          />
          <TempPasswordIcon />
        </ClassicLabelForm>
        {activateChangePassword && temp && (
          <>
            <ClassicLabelForm style={{ color: 'black' }}>
              New password
              <ClassicInputForm
                onChange={e => setNewPassword(e.currentTarget.value)}
                // value={newPassword}
                type={passwordShown ? 'text' : 'password'}
                name="newPassword"
                title="enter the new password"
              />
              <KeyIconStyle />
              <ButtonForVisibility
                type="button"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? (
                  <VisibilityOffIconStyle />
                ) : (
                  <VisibilityIconStyle />
                )}
              </ButtonForVisibility>
            </ClassicLabelForm>
            <ClassicLabelForm style={{ color: 'black' }}>
              Repeat password
              <ClassicInputForm
                onChange={e => setDoublePassword(e.currentTarget.value)}
                type={passwordShown ? 'text' : 'password'}
                name="doublePassword"
                title="Repeat password"
              />
              <KeyIconStyle />
              <ButtonForVisibility
                type="button"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? (
                  <VisibilityOffIconStyle />
                ) : (
                  <VisibilityIconStyle />
                )}
              </ButtonForVisibility>
            </ClassicLabelForm>
            {activeSubmitPassword && newPassword && (
              <ClassicButton type="submit" onClick={isCloseModal}>
                Change password
                <ChangeCircleIcon sx={{ marginLeft: '5px' }} />
              </ClassicButton>
            )}
          </>
        )}
      </ClassicFormStyle>
    </>
  );
};
