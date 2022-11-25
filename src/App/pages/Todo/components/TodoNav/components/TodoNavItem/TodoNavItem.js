import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ active }) => (active ? baseTheme.colors.purple : baseTheme.colors.fontGrey)};
  background-color: ${({ active }) => active && 'rgba(147, 51, 234, 0.06)'};
`;

const StyledText = styled.p`
  margin-left: 10px;
`;

const TodoNavItem = ({ text, children, active, ...props }) => {
  return (
    <StyledNavItem active={text === active} {...props}>
      {children}
      <StyledText>{text}</StyledText>
    </StyledNavItem>
  );
};

export default TodoNavItem;
