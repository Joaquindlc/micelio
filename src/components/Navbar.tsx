import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle"; // Tu componente de cambio de tema
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export function Navbar() {
  return (
    <nav className={flex({
      justify: 'space-between',
      align: 'center',
      p: '4',
      bg: 'background', // Token semántico
      borderBottom: '1px solid',
      borderColor: 'accent', // O un token de borde si lo defines
      position: 'sticky',
      top: 0,
      zIndex: 10
    })}>
      <div className={css({ fontWeight: 'bold', fontSize: 'xl', color: 'accent' })}>
        🌿 Micelio Admin
      </div>

      <div className={flex({ gap: '4', align: 'center' })}>
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}