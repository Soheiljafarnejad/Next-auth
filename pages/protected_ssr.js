import { getSession, useSession } from "next-auth/react";

const ProtectedSsr = () => {
  const { data, status } = useSession();

  console.log({ id: data.user.id, accessToken: data.user.accessToken });

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <p>
        <span className="mr-1 text-blue-600 font-medium">Name :</span>
        {data.user.name}
      </p>
      <p>
        <span className="mr-1 text-blue-600 font-medium">Email :</span>
        {data.user.email}
      </p>
      <p>
        <span className="mr-1 text-blue-600 font-medium">Id:</span>
        {data.user.id}
      </p>
      <p>
        <span className="mr-1 text-blue-600 font-medium">AccessToken :</span>
        {data.user.accessToken}
      </p>
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
