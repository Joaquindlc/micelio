// src/components/CultivoCard.tsx
import { cultivoCard } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { stack } from '@/styled-system/patterns'
import { Sprout, Droplets, Thermometer } from 'lucide-react'

interface Props {
  name: string
  status: 'healthy' | 'warning' | 'critical'
}

export function CultivoCard({ name, status }: Props) {
  return (
    <div className={cultivoCard({ status })}>
      <div className={stack({ gap: '4' })}>
        <header className={css({ display: 'flex', justify: 'space-between' })}>
          <h3 className={css({ fontWeight: 'bold', fontSize: 'lg', color: 'text' })}>{name}</h3>
          <Sprout className={css({ color: 'accent' })} />
        </header>
        
        <div className={stack({ gap: '2' })}>
          <div className={css({ display: 'flex', gap: '2', alignItems: 'center', fontSize: 'sm' })}>
            <Droplets size={16} /> <span>Humedad: 75%</span>
          </div>
          <div className={css({ display: 'flex', gap: '2', alignItems: 'center', fontSize: 'sm' })}>
            <Thermometer size={16} /> <span>Temp: 22°C</span>
          </div>
        </div>
      </div>
    </div>
  )
}