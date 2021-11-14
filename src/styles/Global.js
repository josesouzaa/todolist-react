import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
    --secundary: ${({ theme }) => theme.colors.secundary};
    --red: ${({ theme }) => theme.colors.red};
    --background: ${({ theme }) => theme.colors.background};
    --text: ${({ theme }) => theme.colors.text};
    --gray: ${({ theme }) => theme.colors.gray};
    --font: ${({ theme }) => theme.font};
  }
  
  * {
    font-family: ${({ theme }) => theme.font};
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root {
    flex-grow: 1;
    max-width: min(90vw, 1160px);
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    padding: 2rem;
    border: 1px solid var(--gray);
    border-radius: 0.4rem;
  }
`
