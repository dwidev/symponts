import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center h-screen">
          <Card className="px-5 py-10 border-foreground/25 max-w-2xl gap-2">
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
              A modern AI-powered platform for health symptom analysis
            </p>
            <CardDescription className="mb-5">
              <p className="text-pretty">
                Online tool that helps you input symptoms, get instant AI-based
                suggestions, and make informed health decisions easily and
                securely.
              </p>
            </CardDescription>
            <Button asChild className="flex flex-row">
              <Link href="/welcome">
                <FaGoogle /> Sign in with Google
              </Link>
            </Button>
          </Card>
        </div>
      </main>
    </>
  );
}
