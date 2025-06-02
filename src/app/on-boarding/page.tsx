"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

export default function OnBoardingPage() {
  const maxStep = 3;
  const [step, setStep] = useState(1);

  function next() {
    setStep((prev) => prev + 1);
  }

  function prev() {
    setStep((prev) => prev - 1);
  }

  return (
    <>
      <section className="">
        <h1 className="mt-5 text-2xl">Haii Fahmi! Welcome to SympontsAI.</h1>
        <h2> We&apos;re to help analyze your health symponts</h2>
        <div className="flex flex-row justify-center items-center mt-10">
          {step > 1 && (
            <BiArrowBack
              className="mr-3 cursor-pointer"
              size={25}
              onClick={prev}
            />
          )}
          <Progress value={(step * 100) / maxStep} className="" />
          <p className="ml-2">
            {step}/{maxStep}
          </p>
        </div>
        <div className="mt-5">
          {step == 1 && (
            <>
              <label htmlFor="name">
                What is your full name? We&apos;d like to get to know you
                better.
                <p className="text-sm text-slate-400 italic">
                  Feel free to use just a nickname
                </p>
              </label>
              <Input
                id="name"
                placeholder="Insert Fullname / Nickname"
                className="mt-3 w-1/2"
              />
            </>
          )}
          {step == 2 && (
            <>
              <label>
                How old are you? Your age helps us provide more accurate
                results.
              </label>
              <div className="mt-3 flex flex-row items-center">
                <Input
                  placeholder="Ex. 24"
                  type="number"
                  className="w-30"
                  maxLength={3}
                  max={3}
                />
                <p className="ml-3 text-sm">Years</p>
              </div>
            </>
          )}
          {step == 3 && (
            <>
              <label>
                What is your gender? This is important for accurate health
                analysis.
              </label>
              <div className="mt-4">
                {["Male", "Female"].map((e) => {
                  const isMale = e.toLowerCase() == "male";
                  return (
                    <div
                      className={cn(
                        "bg-slate-200 p-4 rounded mb-4 cursor-pointer hover:bg-slate-300 border-2",
                        isMale
                          ? "border-slate-400 bg-slate-300"
                          : "border-transparent bg-slate-100"
                      )}
                      key={e}
                    >
                      <p className={isMale ? "font-bold" : ""}>{e}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <Button className="mt-5" onClick={next}>
          Next
        </Button>
      </section>
    </>
  );
}
