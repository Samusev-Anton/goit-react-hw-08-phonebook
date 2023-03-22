import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { VerifyEmail } from 'redux/operations/userOperations';
import { MainTitle, NavToLink, SecondTitle } from 'components/GlobalStyles';

export const VerifyUser = () => {
  const dispatch = useDispatch();
  const { verifyToken } = useParams();
  console.log(verifyToken);
  dispatch(VerifyEmail(verifyToken));
  return (
    <>
      <MainTitle>Congratulations! You have successfully registered</MainTitle>
      <SecondTitle>
        <NavToLink to="/login">click to the link to login</NavToLink>
      </SecondTitle>
    </>
  );
};
