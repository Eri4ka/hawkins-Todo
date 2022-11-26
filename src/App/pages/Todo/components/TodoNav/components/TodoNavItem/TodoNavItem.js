import { useContext } from 'react';

import { ThemeContext } from 'App/App';

import styled from 'styled-components';

const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ active, context, theme }) => {
    return active ? (!context ? theme.colors.white : theme.colors.purple) : theme.colors.fontGrey;
  }};
  background-color: ${({ active, context }) =>
    active ? (context ? 'rgba(147, 51, 234, 0.06)' : 'rgba(242, 242, 242, 0.15)') : ''};
`;

const StyledText = styled.p`
  margin-left: 10px;
`;

const TodoNavItem = ({ text, children, active, ...props }) => {
  const context = useContext(ThemeContext);

  return (
    <StyledNavItem context={context} active={text === active} {...props}>
      {children}
      <StyledText>{text}</StyledText>
    </StyledNavItem>
  );
};

export default TodoNavItem;
