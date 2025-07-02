import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth/auth";
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import LoginWrapper from "./wrapper";
import LandingChat from "@/components/shared/landing-chat";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default async function Home() {
  return (
    <LoginWrapper>
      <section className="size-full flex flex-row justify-center items-center">
        <div className="flex justify-center w-full gap-7 px-8 items-center max-w-7xl">
          <div className="px-5 py-10 flex-1">
            <div className="flex flex-col justify-center items-center gap-7">
              <h1 className="text-6xl font-bold">Symptoms.AI</h1>
              <p className="text-2xl text-pretty text-center mt-2">
                interactive AI for second opinion your health symptoms
              </p>
              <div className="flex flex-row gap-5">
                <SignIn />
                <a
                  href="https://github.com/dwidev/symponts"
                  target="_blank"
                  className="flex flex-row justify-between"
                >
                  <Button
                    className="flex flex-row rounded-none w-36 h-12"
                    variant="outline"
                  >
                    <FaGithubAlt /> Star on Github
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ScrollArea className="h-[50%]">
              <LandingChat />
            </ScrollArea>
          </div>
        </div>
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
      <Button type="submit" className="flex flex-row rounded-none w-36 h-12">
        <FaGithub /> Sign in
      </Button>
    </form>
  );
}
