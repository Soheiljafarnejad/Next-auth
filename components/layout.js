import { useSession, signIn } from "next-auth/react";
import Header from "./Header";

const Layout = ({ children }) => {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
