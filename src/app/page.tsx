import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <> 
      <div className={css({ 
          display: 'flex', 
          height: '100vh', 
          flexDirection: 'column', // Añadido para que el botón no tape el texto
          alignItems: 'center', 
          justifyContent: 'center',
          bg: 'green.50'
        })}>
        <h1 className={css({ 
            fontSize: '4xl', 
            fontWeight: 'bold', 
            color: 'green.700',
            transition: 'transform 0.2s',
            mb: '4', // Margen inferior para separar del botón
            _hover: { transform: 'scale(1.05)' } 
          })}>
          🌿 Micelio Ready
        </h1>

        
        <SignedOut>
          <div className={css({ display: 'flex', gap: '4' })}>
            <SignInButton mode="modal" />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
