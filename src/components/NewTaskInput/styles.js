import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    flex-grow: 2;
    height: 4rem;
    padding: 1rem;

    border: 1px solid var(--secundary);
    border-radius: 0.2rem 0 0 0.2rem;
  }

  button {
    height: 4rem;
    padding: 1rem;
    cursor: pointer;

    background: var(--secundary);
    border: 1px solid var(--secundary);
    border-radius: 0 0.2rem 0.2rem 0;
    color: #f8f9fa;
    font-weight: 500;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.3);
    }
  }
`
