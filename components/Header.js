import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
const Header = () => {
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
        <button onClick={() => signIn("github")}>sign in</button>
        <button onClick={() => signOut()}>sign out</button>
      </div>
    </header>
  );
};

export default Header;
