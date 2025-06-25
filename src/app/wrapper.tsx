import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const LoginWrapper = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return children;
};

export default LoginWrapper;
