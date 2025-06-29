import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { signIn } from "@/lib/auth/auth";
import Link from "next/link";
import { FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";
import LoginWrapper from "./wrapper";

export default async function Home() {
  return (
    <LoginWrapper>
      <section className="">
        <Card className="px-5 py-10 border-foreground/25 gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-3xl font-bold">Symptoms AI</p>
            <a
              href="https://github.com/dwidev/symponts"
              target="_blank"
              className="flex flex-row justify-between"
            >
              <Button className="flex flex-row">
                <FaGithubAlt /> Star on Github
              </Button>
            </a>
          </div>
          <p className="text-pretty">
            interactive AI for second opinion your health symptoms
          </p>
          <CardDescription className="mb-5">
            <p className="text-pretty">
              Online tool that helps you input symptoms, get instant AI-based
              suggestions, and make informed health decisions easily.
            </p>
          </CardDescription>
          <Button asChild className="flex flex-row">
            <Link href="/personal-infromation">
              <FaGoogle /> Sign in with Google
            </Link>
          </Button>
          <SignIn />
        </Card>
      </section>
    </LoginWrapper>
  );
}

function SignIn(): React.JSX.Element {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" className="flex flex-row">
        <FaGithub /> Signin with GitHub
      </Button>
    </form>
  );
}
