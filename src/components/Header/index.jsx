import { useState } from 'react'
import { useSwitchTheme } from '../../hooks/useSwitchTheme'
import { Switch } from '../Switch'
import { Container } from './styles'

export function Header({ theme, setTheme }) {
  const { lightTheme, darkTheme } = useSwitchTheme()
  const [switcher, setSwitcher] = useState(false)

  return (
    <Container>
      <h1>TODO LIST</h1>
      <Switch
        isOn={switcher}
        isActive={switcher}
        handlePosition={() => setSwitcher(!switcher)}
        handleToggle={() =>
          theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
        }
      />
    </Container>
  )
}
