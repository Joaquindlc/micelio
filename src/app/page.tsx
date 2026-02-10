import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { css } from '@/styled-system/css';
import {CultivoCard} from '../components/CultivoCard';

export default function Home() {
  return (
    <main className={css({ 
      display: 'flex', 
      minH: 'calc(100vh - 64px)', // Ajuste para que no scrollee por el Navbar
      alignItems: 'center', 
      justifyContent: 'center',
      bg: 'background', 
      color: 'text',
      transition: 'background 0.3s ease' // Suaviza el cambio de tema
    })}>
      asdasd
      <h1 className={css({ 
        fontSize: '4xl', 
        fontWeight: 'bold', 
        color: 'accent' 
      })}>
        🌿 Home Page
      </h1>
      <CultivoCard/>
 
    </main>
/*           <SignedOut>
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
        </SignedIn>  */
  );
}
/*       */