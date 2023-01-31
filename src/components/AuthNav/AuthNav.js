import { AuthList, AuthListItem, AuthTitle } from './AuthNav.styled';
import Assignment from '@mui/icons-material/Assignment';
import InputIcon from '@mui/icons-material/Input';

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthTitle to="/register">
          Register
          <Assignment sx={{ marginLeft: '5px' }} />
        </AuthTitle>
      </AuthListItem>
      <AuthListItem>
        <AuthTitle to="/login">
          Log In
          <InputIcon sx={{ marginLeft: '5px' }} />
        </AuthTitle>
      </AuthListItem>
    </AuthList>
  );
};
