/*
import { Button } from '../components/StyledComponent/Button.styled';
import { Button1 } from '../components/StyledComponent/Button.styled';
import { Button2 } from '../components/StyledComponent/Button.styled';
import { Button3 } from '../components/StyledComponent/Button.styled';
import { Button4 } from '../components/StyledComponent/Button.styled';
*/

// альтернативный вариант
import * as S from '../components/StyledComponent/Button.styled';
import * as St from '../components/StyledComponent/SecondButton.styled';
import styled from 'styled-components';

// использование styled-componend внутри компонента
const DangerButton = styled(S.Button)`
  background-color: red;
`;

const HomePage = () => {
  return (
    <>
      <S.Button>Кнопка 1</S.Button>
      <S.Button $highlighted>Выделенная кнопка</S.Button>
      <S.Button1 $size="small">Small</S.Button1>
      <S.Button1 $size="medium">Medium</S.Button1>
      <S.Button1 $size="large">Large</S.Button1>
      <S.Button2>Нормальная кнопка</S.Button2>
      <S.Button2 $primary={true}>Primary Button</S.Button2>
      <S.Button3 disabled>Disabled</S.Button3>
      <S.Button3 $primary>Primary Button3</S.Button3>
      <S.Button4>Primary</S.Button4>
      <S.Button4 as="a" href="#">
        Primary
      </S.Button4>
      <S.Button4 as="div">Primary</S.Button4>
      <S.Button5>Primary</S.Button5>
      <St.Block>Block is other file</St.Block>
      <S.UnstyledBlock>Не стил. блок</S.UnstyledBlock>
      <S.Input type="search" placeholder="Поиск" />
      <S.Input type="password" placeholder="Password" />
      <DangerButton>Кнопка DangerButton</DangerButton>
      <S.Title>Заголовок</S.Title>
      <S.Subtitle>Подзаголовок</S.Subtitle>
      <S.TitleNew>Заголовок</S.TitleNew>
      <S.SubtitleNew>Подзаголовок</S.SubtitleNew>
      <S.AnimatedComponent>Animated Component</S.AnimatedComponent>
      <S.ResponsiveComponent>Responsive Component</S.ResponsiveComponent>
      <S.ButtonByTheme>ButtonByTheme</S.ButtonByTheme>
    </>
  );
};

export default HomePage;

// https://www.youtube.com/watch?v=PEtv08DZphk&t=1558s
// 37-32
