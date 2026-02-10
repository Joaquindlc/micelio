'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { css } from '@/styled-system/css'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect solo se ejecuta en el cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Si no está montado, renderizamos un placeholder o nada 
  // para que coincida con el HTML inicial del servidor
  if (!mounted) {
    return <div className={css({ w: '10', h: '10' })} /> 
  }

  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={css({
        p: '2',
        borderRadius: 'md',
        bg: 'accent',
        color: 'background',
        cursor: 'pointer'
      })}
    >
      {theme === 'light' ? 'Oscuro' : 'Claro'}
    </button>
  )
}