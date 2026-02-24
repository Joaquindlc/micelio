import { defineRecipe } from '@pandacss/dev';

export const cardRecipe = defineRecipe({
  className: 'card',
  description: 'Tarjeta bento para el dashboard',
  base: {
    display: 'flex',
    flexDirection: 'column',
    p: '6',
    borderRadius: '2xl',
    bg: 'bg.default',
    border: '1px solid',
    borderColor: 'accent/20',
    transition: 'all 0.2s ease',
  },
  variants: {
    size: {
      small: { gridColumn: 'span 1', gridRow: 'span 1' },
      large: { gridColumn: { md: 'span 2' }, gridRow: 'span 2' }
    },
    status: {
      default: {},
      active: { 
        bg: 'green.500', 
        color: 'white', 
        borderColor: 'transparent',
        __hover: { bg: 'green.600' }
      }
    }
  },
  defaultVariants: {
    size: 'small',
    status: 'default'
  }
});

export const taskPill = defineRecipe({
  className: 'taskPill',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    px: '3',
    py: '1',
    borderRadius: 'full',
    fontSize: 'xs',
    fontWeight: 'medium',
    border: '1px solid',
    transition: 'all 0.2s ease',
    cursor: "pointer"
  },
  variants: {
    status: {
      pending: {
        bg: 'accent/10',
        borderColor: 'accent/30',
        color: 'text',
      },
      completed: {
        bg: 'bg.default',
        borderColor: 'text.muted/20',
        color: 'text.muted',
        opacity: 0.6,
        textDecoration: 'line-through',
      }
    }
  },
  defaultVariants: {
    status: 'pending'
  }
});