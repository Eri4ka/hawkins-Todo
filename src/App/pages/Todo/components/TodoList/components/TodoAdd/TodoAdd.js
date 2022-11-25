import { useRef } from 'react';

import { ReactComponent as AddIc } from 'icons/todo/add.svg';

import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const TodoAdd = ({ handleAddToDo }) => {
  const inputRef = useRef();

  const handleAdd = () => {
    handleAddToDo(inputRef);
    inputRef.current.value = '';
  };

  return (
    <StyledContainer>
      <StyledInput
        ref={inputRef}
        type='text'
        placeholder='Add todo'
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <StyledButton onClick={handleAdd}>
        <AddIc />
      </StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${baseTheme.colors.grey};
  border: none;
  border-radius: 5px;
  padding: 0 10px;
`;

const StyledButton = styled.button`
  ${baseTheme.dFAcJc}
  position: absolute;
  border: none;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: rotateZ(180deg) scale(1.2);
  }
`;

export default TodoAdd;
