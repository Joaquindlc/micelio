"use client";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

export function Navbar() {
  return (
    <nav
      className={flex({
        justify: "space-between",
        align: "center",
        px: { base: "4", md: "8" },
        py: "3",
        position: "sticky",
        top: 0,
        zIndex: 100,
        // Glassmorphism 
        bg: "bg.canvas", 
        backdropFilter: "blur(12px)",
        borderBottom: "2px solid",
        borderColor: "accent",
        boxShadow: "sm",
      })}
    >
      {/* Branding */}
      <div className={flex({ align: "center", gap: "2",  cursor: "pointer" })}>
        <span className={css({ fontSize: "2xl" })}>🌿</span>
        <div className={css({ 
          fontWeight: "900", 
          fontSize: "xl", 
          color: "text",
          letterSpacing: "tighter"
         
        })}>
          Micelio<span className={css({ color: "accent" })}>.</span>
        </div>
      </div>

      {/* Acciones de Usuario */}
      <div className={flex({ gap: "4", align: "center" })}>
        <ThemeToggle />

        {/* Divisor */}
        <div className={css({ w: "1px", h: "6", bg: "accent", opacity: 0.8 })} />

        <SignedOut>
          <SignInButton mode="modal">
            <button className={css({ 
              cursor: "pointer", 
              fontWeight: "medium",
              _hover: { color: "accent" } 
            })}>
              Entrar
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          
          <div className={css({ display: "flex", alignItems: "center", minW: "32px" })}>
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{
                elements: {
                  avatarBox: css({ width: "32px", height: "32px" })
                }
              }}
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}