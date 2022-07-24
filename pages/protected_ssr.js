import { getSession, useSession } from "next-auth/react";

const ProtectedSsr = () => {
  const { data, status } = useSession();
  console.log();
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>{data.user.name}</p>
      <p>{data.user.email}</p>
    </div>
  );
};

export default ProtectedSsr;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/protected_ssr",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
