import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default function Welcome() {
  return (
    <>
      <section className="">
        <h1 className="mt-5 text-2xl">Haii Fahmi! Welcome to SympontsAI.</h1>
        <h2> We&apos;re to help analyze your health symponts</h2>
        <div className="flex flex-row justify-center items-center mt-10">
          <Progress value={20} className="" />
          <p className="ml-2">1/3</p>
        </div>
        <div className="mt-10">
          <form action="">
            <label>
              How old are you? Your age helps us provide more accurate results.
            </label>
            <Input placeholder="Insert Age" className="mt-3 w-1/2" />
            <Button className="mt-5">Next</Button>
          </form>
        </div>
      </section>
    </>
  );
}
