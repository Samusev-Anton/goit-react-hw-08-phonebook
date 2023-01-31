import { MainWrap, MainTitle, SecondTitle } from 'components/GlobalStyles';
import { NavigateButton } from 'components/NavigateButton';

export const Home = () => {
  return (
    <MainWrap>
      <MainTitle>In front of you is a book for storing contacts</MainTitle>
      {/* <img
        src="https://i.gifer.com/WS2k.gif"
        alt="Obi-Wan Kenobi"
        width="280"
        height="160"
        style={{ margin: '0 auto' }}
      /> */}

      <SecondTitle>Let `s start? </SecondTitle>
      <NavigateButton />
    </MainWrap>
  );
};
