import styled, { css, keyframes } from 'styled-components';
import { hover } from './Common.styled';

const sizes = {
  small: {
    fontSize: '0.8em',
    padding: '5px 10px',
    width: '100px',
  },
  medium: {
    fontSize: '1em',
    padding: '10px 20px',
    width: '150px',
  },
  large: {
    fontSize: '1.2em',
    padding: '15px 30px',
    width: '200px',
  },
};

// создадим стилизованную кнопку

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 200px;
  margin: 0 auto;
  background-color: ${(props) => (props.$highlighted ? 'yellow' : '#4caf50')};
  color: ${(props) => (props.$highlighted ? 'red' : 'white')};

  &:hover {
    background-color: ${(props) => (props.$highlighted ? 'orange' : '#4c5550')};
    color: ${(props) => (props.$highlighted ? 'red' : 'white')};
  }
`;

// если пропс приходит, то red

export const Button1 = styled.button`
  padding: ${(props) => sizes[props.$size]?.padding || sizes.medium.padding};
  font-size: ${(props) =>
    sizes[props.$size]?.fontSize || sizes.medium.fontSize};
  border: none;
  cursor: pointer;
  width: ${(props) => sizes[props.$size]?.width || sizes.medium.width};
  margin: 0 auto;
  background-color: #4caf50;
  color: white;
`;
// если пропс size не приходит, то medium

export const Button2 = styled.button`
  padding: 5px 10px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  width: 200px;
  margin: 0 auto;
  background-color: ${(props) => (props.$primary ? 'black' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : 'black')};

  ${hover}
`;

export const Button3 = styled.button`
  background: palevioletred;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.$primary &&
    css`
      background: tomato;
      color: white;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

// получим стили из компонента Button
export const Button4 = styled(Button)`
  background-color: red;
`;

const Button5 = styled(Button)`
  background-color: black;
`;

export { Button5 };

export const UnstyledBlock = styled.div`
  background-color: green;
  width: 200px;
  height: 50px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

// использование миксинов
/*
const titleMixin = css`
  font-size: 32px;
  line-height: 20px;
`;

const subtitleMixin = css`
  font-size: 24px;
  line-height: 20px;
`;
*/

/*
export const Title = styled.h1`
  ${titleMixin}
  color: red;
`;

export const Subtitle = styled.p`
  ${subtitleMixin}
  color: green;
`;
*/

// с помощью функции

const titleMixin = (view = 'primary') => {
  if (view === 'primary') {
    return css`
      font-size: 32px;
      line-height: 16px;
    `;
  }

  if (view === 'subtitle') {
    return css`
      font-size: 24px;
      line-height: 8px;
    `;
  }
};

export const Title = styled.h1`
  ${titleMixin('primary')}
  color: red;
`;

export const Subtitle = styled.p`
  ${titleMixin('subtitle')}
  color: green;
`;

const SIZES = {
  primary: css`
    font-size: 24px;
    line-height: 20px;
  `,

  subtitle: css`
    font-size: 20px;
    line-height: 16px;
  `,
};

const titleNewMixin = (view = 'primary') => {
  const styles = SIZES[view];
  return styles;
};

export const TitleNew = styled.h1`
  ${titleNewMixin('primary')}
  color: red;
`;

export const SubtitleNew = styled.p`
  ${titleNewMixin('subtitle')}
  color: green;
`;

// анимация
const fadeInScaleRotate = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// Стилизованный компонент с анимацией

export const AnimatedComponent = styled.div`
  animation: ${fadeInScaleRotate} 2s ease-in-out;
  min-width: 200px;
  min-height: 200px;
  background-color: palevioletred;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;

// медиазапррсы
export const ResponsiveComponent = styled.div`
  margin: 0 auto;
  background-color: lightblue;
  padding: 20px;
  width: 900px;

  @media (max-width: 768px) {
    background-color: lightgreen;
    padding: 10px;
    width: 600px;
  }

  @media (max-width: 375px) {
    background-color: red;
    padding: 10px;
    width: 300px;
  }
`;

export const ButtonByTheme = styled.button`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.25s linear;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
