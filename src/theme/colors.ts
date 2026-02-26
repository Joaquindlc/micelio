export const themeColors = {
  background: {
    value: {
      base: '{colors.white}',
      _pastel: '#ffd8d8',
      _retro: '#e2d5bc',
      _coffee: '#20161F',
      _forest: '#171212',
      _cyberpunk: '#FF00FF',
      _synthwave: '#2D1B69',
      _luxury: '#171618',
      _autumn: '#D8B4A0',
      _valentine: '#E96D7B',
      _aqua: '#2DD4BF',
      _business: '#1C4E80',
      _night: '#0F172A',
      _dracula: '#282A36',
    }
  },
  text: {
    value: {
      base: '{colors.slate.900}',
      _pastel: '#4b5563',
      _retro: '#3d3d3d',
      _coffee: '#F5F5F5',
      _forest: '#f0fdf4',
      _cyberpunk: '#000000',
      _synthwave: '#ffffff',
      _luxury: '#E2C697',
      _autumn: '#fdf2f2',
      _valentine: '#5f0d1a',
      _aqua: '#00202e',
      _business: '#ffffff',
      _night: '#f8fafc',
      _dracula: '#f8f8f2',
    },
    muted: {
      value: {
        base: '{colors.slate.500}',
        _pastel: '#8e9aaf',
        _retro: '#7d7d7d',
        _coffee: '#A69B97',
        _forest: '#94a3b8',
        _cyberpunk: '#444444',
        _synthwave: '#a5b4fc',
        _luxury: '#8A7A5F',
        _autumn: '#8c786d',
        _valentine: '#a85a67',
        _aqua: '#4a7c82',
        _business: '#cbd5e1',
        _night: '#94a3b8',
        _dracula: '#6272a4', // El clásico "comment" color de Dracula
      }
    }
  },
  accent: {
    value: {
      base: '{colors.green.500}',
      _pastel: '#b7e4c7',
      _retro: '#ef9995',
      _coffee: '#A67C58',
      _forest: '#2B4C3F',
      _cyberpunk: '#00FFFF',
      _synthwave: '#FF1E9E',
      _luxury: '#B6862D',
      _autumn: '#D27548',
      _valentine: '#FF8FAB',
      _aqua: '#06B6D4',
      _business: '#0091D5',
      _night: '#334155',
      _dracula: '#BD93F9',
    }
  },
  shadow: {
    value: {
      base: 'rgba(0, 0, 0, 0.1)',    // Sombra suave para temas claros
      _luxury: 'rgba(0, 0, 0, 0.6)', // Sombra muy oscura para Luxury
      _coffee: 'rgba(0, 0, 0, 0.5)', 
      _dracula: 'rgba(0, 0, 0, 0.9)', // Sombra intensa para Dracula
    }
  }
};