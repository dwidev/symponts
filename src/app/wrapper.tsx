import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const LoginWrapper = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <Suspense
      fallback={
        <>
          <p>Loading....</p>
        </>
      }
    >
      {children}
    </Suspense>
  );
};

export default LoginWrapper;
