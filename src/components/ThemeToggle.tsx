'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Palette, ChevronDown } from 'lucide-react'
import { css } from '@/styled-system/css'
import { flex, stack } from '@/styled-system/patterns'
import {THEMES} from "../constants";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className={css({ w: '10', h: '10' })} />

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={flex({ 
          align: 'center', gap: '2', px: '3', py: '2', 
          borderRadius: 'md', bg: 'background', border: '1px solid', 
          borderColor: 'accent', cursor: 'pointer',
          textTransform: 'capitalize'
        })}>
          <Palette size={18} />
          <span className={css({ fontSize: 'sm', fontWeight: 'medium' })}>
            {theme}
          </span>
          <ChevronDown size={14} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={stack({
          bg: 'background', p: '2', borderRadius: 'lg', 
          boxShadow: 'xl', border: '1px solid', borderColor: 'accent',
          minW: '200px', zIndex: 100, maxH: '400px', overflowY: 'auto'
        })}>
          {THEMES.map((t) => (
            <DropdownMenu.Item 
              key={t.name}
              className={flex({ 
                justify: 'space-between', align: 'center', p: '2', 
                cursor: 'pointer', borderRadius: 'md',
                _hover: { bg: 'accent', color: 'background' } 
              })}
              onClick={() => setTheme(t.name)}
            >
              <span className={css({ fontSize: 'sm', textTransform: 'capitalize' })}>
                {t.label}
              </span>
              <div className={flex({ gap: '1' })}>
                {t.colors.map((c, i) => (
                  <div key={i} className={css({ w: '3', h: '3', borderRadius: 'full' })} style={{ backgroundColor: c, border: '1px solid'}} />
                ))}
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}