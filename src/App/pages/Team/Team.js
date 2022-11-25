import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const Team = () => {
  return <TeamWrapper></TeamWrapper>;
};

const TeamWrapper = styled.div`
  margin-top: 23px;
  padding: 18px 16px;
  border-radius: 10px;
  background-color: ${baseTheme.colors.white};
`;

export default Team;
