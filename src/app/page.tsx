import { Card, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center h-screen">
          <Card className="px-5 py-10 border-foreground/25 max-w-2xl gap-2">
            <p className="text-3xl font-bold">Symptoms AI</p>
            <p className="text-2xl text-pretty font-semibold">
              A modern AI-powered platform for health symptom analysis
            </p>
            <CardDescription>
              <p className="text-pretty">
                Online tool that helps you input symptoms, get instant AI-based
                suggestions, and make informed health decisions easily and
                securely.
              </p>
            </CardDescription>
          </Card>
        </div>
      </main>
    </>
  );
}
