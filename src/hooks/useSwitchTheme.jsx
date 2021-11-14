import { useEffect, useState } from 'react'
import { lightTheme, darkTheme } from '../styles/Theme'

export function useSwitchTheme() {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-colors-scheme: light)').matches
    ) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }, [])

  return { theme, setTheme, lightTheme, darkTheme }
}
