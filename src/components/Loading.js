import { Box } from 'components/Box';
import { Circles } from 'react-loader-spinner';
import { CirclesStyled } from 'components/GlobalStyles';

export const Loading = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Circles {...CirclesStyled} />
    </Box>
  );
};
