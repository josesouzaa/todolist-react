import styled from 'styled-components'

export const TaskContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding: 1rem 1rem;
  border: 1px solid var(--gray);
  border-radius: 0.2rem;

  strong {
    flex-grow: 2;
    font-weight: 400;
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  }

  button {
    cursor: pointer;
    background: transparent;

    border: 0;
    padding: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.6);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`
