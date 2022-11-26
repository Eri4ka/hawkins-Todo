import { usePopup } from 'hooks/usePopup';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as DotsIc } from 'icons/todo/dots.svg';
import TodoListItemMenu from './components/TodoListItemMenu';

import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const TodoListItem = ({ toDo, handleDeleteToDo, handleToggleFavorite }) => {
  const { id, title, favorite, date } = toDo;
  const { open, setOpen, popupRef, triggerRef } = usePopup();
  const transformeredDate = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const handleFavorite = () => {
    handleToggleFavorite(id);
    setOpen(false);
  };

  return (
    <StyledItem key={id}>
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDate>{transformeredDate}</StyledDate>
      </StyledWrapper>
      <StyledBadge>
        {favorite && <StyledStar icon={faStar} />}
        <StyledDots ref={triggerRef} />
      </StyledBadge>
      {open && (
        <TodoListItemMenu
          ref={popupRef}
          handleDeleteToDo={() => handleDeleteToDo(id)}
          handleFavorite={handleFavorite}
        />
      )}
    </StyledItem>
  );
};

const StyledItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 42px;
  margin-bottom: 30px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const StyledDate = styled.span`
  font-size: 14px;
  color: ${baseTheme.colors.fontGrey};
`;

const StyledBadge = styled.div`
  align-self: center;
`;

const StyledDots = styled(DotsIc)`
  margin-left: 15px;
  color: gold;
  cursor: pointer;
`;

const StyledStar = styled(FontAwesomeIcon)`
  margin-left: 15px;
  color: gold;
`;

export default TodoListItem;
