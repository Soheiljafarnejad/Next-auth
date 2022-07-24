import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data, status } = useSession();

  return (
    <header className="shadow bg-slate-100 px-4 py-2 flex items-center justify-between">
      <h1 className="self-center items-center">TodoList</h1>
      <div className="flex items-center justify-between gap-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/todos">
          <a>Todos</a>
        </Link>
        {!data && status === "unauthenticated" && (
          <button onClick={() => signIn()}>sign in</button>
        )}
        {data && status === "authenticated" && <button onClick={() => signOut()}>sign out</button>}
      </div>
    </header>
  );
};

export default Header;
