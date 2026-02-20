"use client"
import {useState, useEffect } from 'react';
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export function Navbar() {

  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
 setIsMounted(true);
}, [])

  return (
    <nav className={flex({
      justify: 'space-between',
      align: 'center',
      p: '4',
      bg: 'background', // SemanticToken
      borderBottom: '1px solid',
      borderColor: 'accent', 
      position: 'sticky',
      top: 0,
      zIndex: 10
    })}>
      <div className={css({ fontWeight: 'bold', fontSize: 'xl', color: 'accent' })}>
        🌿 Micelio 
      </div>

      <div className={flex({ gap: '4', align: 'center' })}>
        <ThemeToggle />
        {isMounted ?  ( <UserButton afterSignOutUrl="/" /> ) : (
          <div className={flex({ w: '8', h: '8', borderRadius: 'full', bg: 'gray.200' })} />
        )}
       
      </div>
    </nav>
  );
}