import styled from 'styled-components';
import { ClassicButton } from 'components/GlobalStyles';
import StarIcon from '@mui/icons-material/Star';

export const ContactListStyle = styled.ul`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.almostDarkGreen};
  width: 600px;
  border-radius: 4px;
  padding-left: ${p => p.theme.space[4]}px;
`;

export const ContactNumber = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.clearlyWhite};
  background-color: ${p => p.theme.colors.almostDarkGreen};
  width: 130px;
  cursor: pointer;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover,
  &:focus {
    text-shadow: ${p => p.theme.shadows.shadowSecond};
  }
`;

export const ContactEmail = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.clearlyWhite};
  background-color: ${p => p.theme.colors.almostDarkGreen};
  cursor: pointer;
  width: 250px;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover,
  &:focus {
    text-shadow: ${p => p.theme.shadows.shadowSecond};
  }
`;

export const ButtonForDelete = styled(ClassicButton)`
  padding: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;

export const Favorite = styled(StarIcon)`
  color: orange;
`;

export const ContactChangeContact = styled.h2`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 15px;
`;
