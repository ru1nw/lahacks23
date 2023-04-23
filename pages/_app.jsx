import "focus-visible";
import '@/styles/CompanyCard.css';
import '@/styles/Indiv.css';
import '@/styles/PageList.css';
import "@/styles/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
