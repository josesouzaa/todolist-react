import styled from 'styled-components'

export const TaskContent = styled.div`
  display: flex;
  align-items: center;

  strong {
    text-decoration: ${(props) => (props.checked ? 'underline' : 'none')};
  }
`
