import { NavLink } from 'react-router-dom';

import { ReactComponent as MoonIc } from 'icons/header/moon.svg';

import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const Header = ({ lightTheme, setLightTheme }) => {
  const handleChangeTheme = () => {
    setLightTheme((theme) => !theme);
    console.log(lightTheme);
    localStorage.setItem('lightTheme', !lightTheme);
  };

  return (
    <StyledHeader>
      <StyledHead>Todo App</StyledHead>
      <StyledHeaderMenu>
        <StyledHeaderItem to='/'>Todo</StyledHeaderItem>
        <StyledHeaderItem to='/team'>Team</StyledHeaderItem>
      </StyledHeaderMenu>
      <StyledHeaderIcon lightTheme={lightTheme} onClick={handleChangeTheme}>
        <MoonIc />
      </StyledHeaderIcon>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  ${baseTheme.dFAcJSB}
  background-color: ${baseTheme.colors.white};
  border-radius: 10px;
  padding: 12px 16px;
`;

const StyledHead = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${baseTheme.colors.purple};
`;

const StyledHeaderMenu = styled.nav`
  display: flex;
`;

const StyledHeaderItem = styled(NavLink)`
  margin-right: 35px;
  cursor: pointer;
  text-decoration: none;
  color: ${baseTheme.colors.fontGrey};
  &.active {
    color: ${baseTheme.colors.purple};
  }
`;

const StyledHeaderIcon = styled.div`
  ${({ theme }) => theme.dFAcJc}
  color: ${({ lightTheme, theme }) => (lightTheme ? 'gold' : theme.colors.fontGrey)};
  cursor: pointer;
`;

export default Header;
