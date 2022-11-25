import { baseTheme } from 'styles/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <StyledErrorText>404</StyledErrorText>
      <StyledLink to='/'>Go back to Todo page</StyledLink>
    </StyledErrorPage>
  );
};

const StyledErrorPage = styled.div`
  ${baseTheme.dFDcAcJc}
  margin-top: 23px;
`;

const StyledErrorText = styled.span`
  font-weight: 700;
  font-size: 80px;
  color: ${baseTheme.colors.purple};
`;

const StyledLink = styled(Link)`
  color: ${baseTheme.colors.fontGrey};
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    color: ${baseTheme.colors.purple};
  }
`;

export default ErrorPage;
